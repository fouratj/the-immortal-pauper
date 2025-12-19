# Pauper Story Utils

Utilities for concatenating and managing story files for *The Incompleteness of Empire*.

## Installation

```bash
cd utils
npm install
```

## Usage

### Concatenate Story Files

Concatenates all story files from `04-short/` into a single file in a date-stamped folder within `drafts/`:

```bash
npm run concat
```

Or:

```bash
npm run build
```

Or run directly:

```bash
node concat-story.js
```

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
node stats.js
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

1. ✅ Reads all `.md` files from `The Incompleteness of Empire/04-short/`
2. ✅ Sorts them in order (00- through 09-)
3. ✅ Creates a date-stamped folder in `drafts/` (format: DD-MM-YYYY)
4. ✅ Concatenates all files with:
   - A title and compilation date header
   - Source file comments between each chapter
   - Proper spacing between sections
5. ✅ Outputs a single file: `The Incompleteness of Empire.md`

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
      └── The Incompleteness of Empire.md
```

## Requirements

- Node.js >= 14.0.0

## Scripts

- `npm run concat` / `npm run build` - Concatenate story files
- `npm run stats` / `npm run wc` - Generate word count and statistics

## File Structure

```
utils/
  ├── package.json          # Package configuration
  ├── concat-story.js       # Main concatenation script
  └── README.md            # This file
```


