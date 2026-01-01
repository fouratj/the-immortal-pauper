# Utils Changelog

## 2026-01-01 - Updated for New Story Structure

### Changes Made

1. **Updated Story Structure Support**
   - All scripts now work with the new Act-based structure:
     - Act 1 (Chapters 01-03)
     - Act 2 (Chapters 04-07)
     - Act 3 (Chapters 08-09)
     - Appendix (Chapter 10)
   - Scripts recursively process all Acts in order

2. **Moved package.json to Top Level**
   - Moved from `utils/package.json` to root `package.json`
   - Updated all npm scripts to reference utils folder
   - Updated project name to "the-heir-condition"

3. **Updated Scripts**
   - `concat-story.js`: Now processes all Acts and adds Act headers
   - `build-epub.js`: Recursively finds all markdown files across Acts
   - `stats.js`: Shows statistics grouped by Act

4. **Updated Documentation**
   - README.md now reflects new structure
   - Updated all path references
   - Added file structure diagram

### Usage

All scripts now run from the project root:

```bash
npm run stats    # Generate statistics
npm run concat   # Concatenate story files
npm run epub     # Build EPUB (requires Pandoc)
```

### Output

- **Stats**: Shows per-chapter statistics grouped by Act
- **Concat**: Creates `drafts/DD-MM-YYYY/The Heir Condition.md` with Act headers
- **EPUB**: Creates `builds/The-Heir-Condition-DD-MM-YYYY.epub`

### Current Story Stats

- Total Chapters: 10
- Total Words: 34,327
- Classification: Novelette
- Reading Time: ~2h 18min

