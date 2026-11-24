# BAG WORK 60 V6.2 — Responsive PWA Edition
Upload the contents of this folder to your GitHub Pages publishing folder. Open index.html for training or admin/index.html for editing. On iPhone open each URL in Safari and choose Share > Add to Home Screen. Desktop installation depends on browser support. For local testing run `python -m http.server 8765 --bind 127.0.0.1` in this folder.

## Database workflow
Admin changes are stored in IndexedDB, separately from the published database. Export SQLite and replace bag_work_60_exercises.sqlite in GitHub; commit and wait for deployment. Builder refreshes on focus (unless timer running) or Refresh database. Archived exercises are excluded from generation and remain available to saved workouts; changing category can still invalidate old workouts. Export backups before imports. Restore previous local backup restores one prior snapshot. Load published library explicitly replaces local edits. Revision increases on local saves; it is not a global version counter. The original SQL is the V6.1 baseline.

## Offline and dependencies
First visit online, allow service worker setup, load the library and verify airplane-mode operation before relying on offline use. SQL.js 1.13.0 could not be bundled in this environment; CDN fallback is cached by the service worker when available. For fully self-contained deployment follow vendor/README.txt. Offline storage may be evicted by iOS. Export backups regularly. The two installed iOS apps may have isolated storage. Saved workouts retain the V6.1 localStorage format; export/import JSON for migration. Admin is public but cannot write to GitHub. No credentials needed or embedded.

## Release status
Responsive layout, manifests, icons, service worker, archive/restore, one previous backup, SQLite migration and cached published library added. Browser and iPhone integration tests outstanding. Full-screen timer and dedicated update/revision UI are not implemented; existing timer uses wall-clock time while running. No backend or automatic GitHub publishing.
