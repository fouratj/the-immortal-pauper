# Story Utils

Utilities for concatenating and managing story files for *The Heir Condition*.

## Installation

From the project root:

```bash
npm install
```

## Usage

### Concatenate Story Files

Concatenates all story files from `The Heir Condition/04-story/` (across all Acts) into a single file in a date-stamped folder within `drafts/`:

```bash
npm run concat
```

Or:

```bash
npm run build
```

Or run directly:

```bash
node utils/concat-story.js
```

### Build EPUB

Generate an EPUB file from your story chapters:

```bash
npm run epub
```

Or run directly:

```bash
node utils/build-epub.js
```

**Requirements:** [Pandoc](https://pandoc.org/installing.html) must be installed:

```bash
brew install pandoc
```

The EPUB will be saved to `builds/The-Heir-Condition-DD-MM-YYYY.epub` with:
- Auto-generated table of contents
- Proper chapter structure
- Metadata (title, author, date)

### Generate Statistics

Get detailed word counts, reading times, and progress statistics:

```bash
npm run stats
```

Or:

```bash
npm run wc
```

Or run directly:

```bash
node utils/stats.js
```

### Global Installation (Optional)

To install the commands globally:

```bash
npm link
```

Then run from anywhere in your project:

```bash
concat-story
story-stats
```

## What It Does

### Concatenation Script

The concat script:

1. ✅ Reads all `.md` files from `The Heir Condition/04-story/` across all Acts
2. ✅ Sorts them in order (Act 1, Act 2, Act 3, Appendix)
3. ✅ Creates a date-stamped folder in `drafts/` (format: DD-MM-YYYY)
4. ✅ Concatenates all files with:
   - A title and compilation date header
   - Act headers for each section
   - Source file comments between each chapter
   - Proper spacing between sections
5. ✅ Outputs a single file: `The Heir Condition.md`

### Statistics Script

The stats script provides:

- 📊 **Per-chapter statistics**: Word counts, paragraphs, reading time
- 📈 **Summary statistics**: Totals, averages, characters, sentences
- 🎯 **Progress milestones**: Track progress toward common word count goals
  - Flash Fiction (1,000 words)
  - Short Story (7,500 words)
  - Novelette (17,500 words)
  - Novella (40,000 words)
  - Novel (50,000 words)
  - Average Novel (80,000 words)
  - Long Novel (100,000 words)
- ✨ **Category classification**: Automatically classifies your work

## Output Structure

```
drafts/
  └── DD-MM-YYYY/
      └── The Heir Condition.md

builds/
  └── The-Heir-Condition-DD-MM-YYYY.epub
```

## Requirements

- Node.js >= 14.0.0

## Scripts

- `npm run concat` / `npm run build` - Concatenate story files
- `npm run epub` - Build EPUB from story chapters
- `npm run stats` / `npm run wc` - Generate word count and statistics

## File Structure

```
pauper/
  ├── package.json                    # Package configuration (top level)
  ├── utils/
  │   ├── concat-story.js             # Main concatenation script
  │   ├── build-epub.js               # EPUB build script
  │   ├── stats.js                    # Statistics script
  │   ├── concat_story.sh             # Legacy bash script
  │   └── README.md                   # This file
  └── The Heir Condition/
      └── 04-story/
          ├── Act 1/                  # Chapters 01-03
          ├── Act 2/                  # Chapters 04-07
          ├── Act 3/                  # Chapters 08-09
          └── Appendix/               # Chapter 10
```


