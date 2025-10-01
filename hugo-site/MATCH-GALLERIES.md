# Match Galleries

Each match can have its own photo and video gallery using YAML data files.

## How to Add Photos/Videos to a Match

### Step 1: Upload to R2

Upload your files to `media.rustyploughfc.com` (your R2 bucket).

**Keep your original filenames!** No need to rename.

Examples:
- `DSC_5489.jpg`
- `team-celebration.png`
- `match-highlights.mov`

### Step 2: Create/Edit YAML File

Create a file named after the match's `match_id`:

**Example:** `berlin-2025.yaml`

```yaml
images:
  - DSC_5489.jpg
  - DSC_5529.jpg
  - team-photo.jpg
  - action-shot.jpg

videos:
  - match-highlights.mov
  - post-game-interview.mp4
```

### Step 3: Set match_id in Match Page

In your match markdown file (e.g., `content/matches/gife-berlin-2025.md`), add:

```yaml
---
title: "GIFE V - Berlin"
match_id: "berlin-2025"  # Must match the YAML filename
---
```

### Step 4: Commit and Push

```bash
git add hugo-site/data/matches/berlin-2025.yaml
git commit -m "Add Berlin 2025 match photos"
git push
```

Done! The gallery will automatically appear on the match page.

## Match ID Reference

Current matches and their IDs:

- `berlin-2025` → GIFE V - Berlin 2025
- `sydney-2023` → GIFE IV - Sydney 2023
- `london-2022` → GIFE II.2 - London 2022
- `edinburgh-2022` → GIFE III - Edinburgh 2022
- `london-2019` → GIFE II - London 2019
- `ireland-2017` → GIFE I - Ireland 2017

## Benefits

✅ **Keep original filenames** - No renaming needed!
✅ **Easy to add more** - Just add a line to the YAML
✅ **Organized** - One file per match
✅ **Dynamic** - Gallery updates automatically
✅ **Clean** - No hardcoded HTML

## Example

See `berlin-2025.yaml` for a template!
