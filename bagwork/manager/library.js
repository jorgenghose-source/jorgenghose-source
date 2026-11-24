/* BAG WORK 60: browser SQLite adapter. Published library is read-only. */
const BagDB=(()=>{
 const cats=['Bodyweight','Dumbbells','Bag · Hands','Bag · Kicks'], goals=['Strength','Stamina','Explosiveness'];
 const cdn='https://cdn.jsdelivr.net/npm/sql.js@1.13.0/dist/';
 let engine;
 function sql(){return engine ||= new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=cdn+'sql-wasm.js';s.onload=()=>initSqlJs({locateFile:f=>cdn+f}).then(resolve,reject);s.onerror=()=>reject(Error('SQL.js could not load. Check internet connection.'));document.head.append(s)});}
 const key='library';
 function store(mode,fn){return new Promise((resolve,reject)=>{const r=indexedDB.open('bagwork61:'+new URL('.',location.href).pathname,1);r.onupgradeneeded=()=>r.result.createObjectStore('files');r.onerror=()=>reject(r.error);r.onsuccess=()=>{const db=r.result,t=db.transaction('files',mode);let q;try{q=fn(t.objectStore('files'))}catch(e){db.close();reject(e);return}t.oncomplete=()=>{db.close();resolve(q.result)};t.onabort=t.onerror=()=>{db.close();reject(t.error||Error('Storage failed'))}}});}
 function rows(db){const q=db.exec('SELECT id,name,category,goal FROM exercises ORDER BY id');return (q[0]?.values||[]).map(([id,name,category,goal])=>({id,name,category,goal}));}
 function validate(db){const a=rows(db);if(!a.length||a.some(e=>!Number.isSafeInteger(e.id)||e.id<1||typeof e.name!=='string'||!e.name.trim()||e.name.length>120||!cats.includes(e.category)||!goals.includes(e.goal))||new Set(a.map(e=>e.id)).size!==a.length||cats.some(c=>!a.some(e=>e.category===c)))throw Error('Invalid library: keep valid IDs, names, goals and all four categories.');return a;}
 async function open(bytes){const S=await sql(),db=new S.Database(new Uint8Array(bytes));try{validate(db);return db}catch(e){db.close();throw e}}
 async function published(){const r=await fetch('bag_work_60_exercises.sqlite',{cache:'no-store'});if(!r.ok)throw Error('Published database unavailable');return open(await r.arrayBuffer())}
 async function local(){const bytes=await store('readonly',s=>s.get(key));return bytes?open(bytes):published()}
 async function save(db){validate(db);await store('readwrite',s=>s.put(db.export(),key))}
 function download(bytes,name,type='application/octet-stream'){const u=URL.createObjectURL(new Blob([bytes],{type})),a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)}
 return {rows,validate,open,published,local,save,download,cats,goals};
})();
