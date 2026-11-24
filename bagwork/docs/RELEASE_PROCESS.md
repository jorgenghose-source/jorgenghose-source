# Release process
## During freeze
Record issues and tests only. Keep live V6.2 unchanged. Manual database publishing remains allowed; export backup before replacing database, commit and verify Pages update on another device.

## Before implementation
Review backlog, agree acceptance criteria and explicit scope approval. Obtain latest approved source, live commit and current published database. Back up workouts and Admin drafts. Create develop or feature branch from approved baseline. Keep live Pages branch unchanged.

## Development and acceptance
Preserve IDs and storage compatibility; do not overwrite newer published database with packaged baseline. Test SQLite integrity, import/export, generator rules, timer, saved workouts, print/PDF, offline cache, mobile Safari and installed PWA, desktop and update behavior. Test credentials and conflicts if synchronization added. Record evidence and limitations. Use a separate test deployment or local HTTP server; avoid mixing live/test storage.

## Release gate
Obtain approval after reviewing tests and known limitations. Include complete source, SQLite, README/install, changelog, test results, limitations and GitHub-ready ZIP. Check archive integrity and relative paths. Ensure no credentials. Tag approved commit (e.g. v6.3.0), attach ZIP to GitHub release, merge to live branch only after approval. Verify Pages deployment and real-device smoke tests.

## Rollback
Keep prior approved commit and ZIP. Revert application changes if needed; preserve latest database and user backups, assess schema compatibility before rollback. Record incident and retest. Update Project docs and GitHub docs together.
