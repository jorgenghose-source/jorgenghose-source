# Project specification
Status: existing requirements, not a new release approval.

## Workout Builder
60 minutes: warm-up 10; strength 15; water 2; stamina 15; water 2; explosiveness 15; cooldown 1. Each block has five one-minute stations repeated three times. Each starts on heavy bag and includes bag, bodyweight and dumbbells. Block 1 bag hands only; Blocks 2 and 3 selectable hands/kicks/mixed. Preserve generator, swapping, timer, JSON/CSV export, single-page A4 print, save/load/delete multiple workouts and JSON collection import/export.

## Exercise library and Admin
80 original exercises: 20 each bodyweight, dumbbells, bag hands and bag kicks. Maintain stable IDs, category and goal; support search, add/edit, archive/restore, SQLite import/export and local backup. Archived exercises excluded from new generation. Category changes can affect old workouts. Manual publishing remains current workflow.

## Platform
Static GitHub Pages, responsive mobile/tablet/desktop, two installable PWAs, offline after successful online setup. Preserve branding and accessibility (touch targets, keyboard operation, readable layouts). No backend required. Local data is not cross-device sync. Never silently replace unpublished edits.

## Acceptance
Run TEST_LOG checks; preserve existing features and saved workout compatibility. V6.3 scope requires explicit approval; direct PDF and synchronization are candidates, not existing capabilities.
