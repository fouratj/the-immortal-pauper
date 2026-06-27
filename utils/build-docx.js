#!/usr/bin/env node

/**
 * Build Microsoft Word (.docx) from Markdown.
 * Uses Pandoc (same as EPUB build). Run: npm run docx
 *
 * Usage:
 *   node utils/build-docx.js              → full manuscript to builds/The-Heir-Condition-{date}.docx
 *   node utils/build-docx.js <file.md>    → single file to builds/<name>.docx
 *   node utils/build-docx.js file1.md file2.md  → multiple files to builds/
 */

import { readdir, mkdir, stat } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_ROOT = dirname(__dirname);
const STORY_DIR = join(PROJECT_ROOT, 'The Heir Condition', '04-story');
const OUTPUT_DIR = join(PROJECT_ROOT, 'builds');

const METADATA = {
  title: 'The Heir Condition',
  author: 'Anonymous',
  language: 'en-US',
  date: new Date().toISOString().split('T')[0],
};

function formatDate(date = new Date()) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function checkPandoc() {
  try {
    execSync('pandoc --version', { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Collect all .md files from story acts (Act 0, Act 1..., Act 2..., Act 3...), sorted.
 */
async function getManuscriptFiles() {
  if (!existsSync(STORY_DIR)) return [];
  const entries = await readdir(STORY_DIR, { withFileTypes: true });
  const actDirs = entries
    .filter(e => e.isDirectory() && e.name.startsWith('Act'))
    .map(e => e.name)
    .sort();
  const mdFiles = [];
  for (const act of actDirs) {
    const actPath = join(STORY_DIR, act);
    const files = await readdir(actPath);
    const sorted = files
      .filter(f => f.endsWith('.md'))
      .sort()
      .map(f => join(actPath, f));
    mdFiles.push(...sorted);
  }
  return mdFiles;
}

/**
 * Build one or more .docx from the given markdown file paths.
 */
function runPandoc(inputPaths, outputPath, options = {}) {
  const inputList = inputPaths.map(p => `"${p}"`).join(' ');
  const args = [
    'pandoc',
    inputList,
    `-o "${outputPath}"`,
    `--metadata=title:"${options.title ?? METADATA.title}"`,
    `--metadata=author:"${options.author ?? METADATA.author}"`,
    `--metadata=lang:${options.lang ?? METADATA.language}`,
    `--metadata=date:${options.date ?? METADATA.date}`,
    '--standalone',
  ];
  if (options.toc) args.push('--toc', '--toc-depth=2');
  const cmd = args.join(' ');
  execSync(cmd, { stdio: 'inherit', shell: true });
}

async function buildFullManuscript() {
  console.log('📄 Building Word (full manuscript)...\n');
  if (!checkPandoc()) {
    console.error('❌ Pandoc is not installed.');
    console.error('   Install: brew install pandoc');
    console.error('   Or: https://pandoc.org/installing.html');
    process.exit(1);
  }
  const mdFiles = await getManuscriptFiles();
  if (mdFiles.length === 0) {
    console.error('❌ No markdown files found in story directory.');
    process.exit(1);
  }
  await mkdir(OUTPUT_DIR, { recursive: true });
  const dateStamp = formatDate();
  const outputFile = join(OUTPUT_DIR, `The-Heir-Condition-${dateStamp}.docx`);
  console.log(`📂 Source: ${mdFiles.length} files from ${STORY_DIR}`);
  console.log(`📝 Output: ${outputFile}\n`);
  runPandoc(mdFiles, outputFile, { toc: true });
  const st = await stat(outputFile);
  const sizeKB = (st.size / 1024).toFixed(1);
  console.log('\n✨ Word build complete.');
  console.log(`📖 ${outputFile} (${sizeKB} KB)`);
}

async function buildSingleOrMultiple(files) {
  console.log('📄 Building Word from selected file(s)...\n');
  if (!checkPandoc()) {
    console.error('❌ Pandoc is not installed. Install: brew install pandoc');
    process.exit(1);
  }
  const resolved = [];
  for (const f of files) {
    const path = f.startsWith('/') ? f : join(process.cwd(), f);
    if (!existsSync(path)) {
      console.error(`❌ File not found: ${f}`);
      process.exit(1);
    }
    if (!f.endsWith('.md')) {
      console.error(`❌ Not a .md file: ${f}`);
      process.exit(1);
    }
    resolved.push(path);
  }
  await mkdir(OUTPUT_DIR, { recursive: true });
  if (resolved.length === 1) {
    const base = basename(resolved[0], '.md');
    const out = join(OUTPUT_DIR, `${base}.docx`);
    runPandoc(resolved, out);
    console.log(`\n✨ Done: ${out}`);
  } else {
    for (const inputPath of resolved) {
      const base = basename(inputPath, '.md');
      const out = join(OUTPUT_DIR, `${base}.docx`);
      runPandoc([inputPath], out);
      console.log(`   ${base}.docx`);
    }
    console.log('\n✨ Done.');
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  buildFullManuscript();
} else {
  buildSingleOrMultiple(args);
}
