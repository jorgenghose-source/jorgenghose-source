# Architecture and decisions
## Current V6.2
GitHub Pages serves index.html, admin/index.html, library.js, pwa.js, sw.js, manifests, assets and published SQLite. SQL.js reads SQLite in browser. IndexedDB retains Admin working copy and backup; saved workouts use existing localStorage format. Builder refreshes on focus unless timer running, or explicit refresh (per release README). Admin exports SQLite; operator replaces published file and commits. Published library is cached for offline use. Two installed iOS PWAs may have isolated storage.

## Decision register
| ID | Decision | Status / rationale |
|---|---|---|
| ADR-001 | Static GitHub Pages and SQL.js instead of Python API | Adopted V6.1; no server |
| ADR-002 | Local drafts separate from published SQLite | Adopted; avoid overwriting edits |
| ADR-003 | Archive rather than delete exercises | Implemented per V6.2 README; preserve IDs |
| ADR-004 | Two responsive PWAs | Implemented per release report; device testing pending |
| ADR-005 | Manual publishing during freeze | Approved |
| ADR-006 | GitHub API publishing with conflict checks | Proposed; authentication design pending |
| ADR-007 | Client-side direct A4 PDF | Proposed; avoid native print dependency |

## Constraints
SQL.js 1.13.0 CDN fallback; vendor runtime not bundled. First online setup required; iOS storage eviction possible. Revision is local, not a global counter. One previous backup. Admin is public but cannot write to GitHub. Full-screen timer and dedicated revision UI absent. Native printing works desktop/iPhone Safari, fails in installed iPhone PWA per user report.

## V6.3 design questions
Use repository-scoped credentials only, session memory by default; assess browser token exposure. Compare remote file SHA before publishing; reject conflicts and preserve drafts, never silently overwrite. Confirm deployment before reporting published changes available. Bundle dependencies and test offline PDF/share fallback. No design implementation approved yet.
