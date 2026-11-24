# Test log — V6.2 PWA Beta
Updated 2026-11-24. User-reported results, not independently reproduced. Exact OS/browser builds and live commit not supplied.

| ID | Test | Result | Evidence |
|---|---|---|---|
| T01 | Admin local exercise persistence | PASS (reported) | User confirmed added exercise persists |
| T02 | Desktop print/PDF | PASS (reported) | User confirmed works |
| T03 | iPhone Safari print/PDF | PASS (reported) | User confirmed works |
| T04 | Installed iPhone PWA print/PDF | FAIL (reported) | Native print issue; BW-003 |
| T05 | Add/edit/archive/restore | Pending | |
| T06 | SQLite export/import and manual publish | Pending | |
| T07 | Cross-device published update | Pending | |
| T08 | Offline startup after initial online setup | Pending | |
| T09 | Backup recovery and invalid import | Pending | |
| T10 | Workout generation rules and bag modes | Pending | |
| T11 | Save/load/delete and JSON migration | Pending | |
| T12 | Timer during training/background/resume | Pending | |
| T13 | iPhone/iPad/Android/desktop responsive layouts | Pending | |
| T14 | Single-page A4 layout verification | Pending | |
| T15 | Archived IDs and old workout compatibility | Pending | |

## Known bug BW-003
Print/PDF fails in installed iPhone PWA, works in Safari and desktop. Suspected native window.print compatibility; exact failure mode and OS build unknown. Workaround: open Safari and print there. No V6.2 fix during freeze.

## Test entry template
Date / version and commit / device / OS and browser / standalone or browser / steps / expected / actual / pass-fail / evidence / linked bug / retest.
