#!/usr/bin/env node

import { readdir, readFile, writeFile, mkdir, rm } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { execSync, exec } from 'child_process';

// Get current file's directory (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define paths
const PROJECT_ROOT = dirname(__dirname);
const STORY_DIR = join(PROJECT_ROOT, 'The Heir Condition', '04-story');
const OUTPUT_DIR = join(PROJECT_ROOT, 'builds');

// Book metadata
const METADATA = {
  title: 'The Heir Condition',
  author: 'Anonymous', // Change this to your name
  language: 'en-US',
  date: new Date().toISOString().split('T')[0],
};

/**
 * Check if Pandoc is installed
 */
function checkPandoc() {
  try {
    execSync('pandoc --version', { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Format date as DD-MM-YYYY
 */
function formatDate(date = new Date()) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

/**
 * Build EPUB using Pandoc
 */
async function buildEpub() {
  console.log('📚 Building EPUB...\n');

  // Check prerequisites
  if (!checkPandoc()) {
    console.error('❌ Pandoc is not installed.');
    console.error('   Install it with: brew install pandoc');
    console.error('   Or visit: https://pandoc.org/installing.html');
    process.exit(1);
  }

  if (!existsSync(STORY_DIR)) {
    console.error(`❌ Story directory not found: ${STORY_DIR}`);
    process.exit(1);
  }

  // Create output directory
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Get all markdown files from all acts, sorted
  const acts = ['Act 1', 'Act 2', 'Act 3', 'Appendix'];
  const mdFiles = [];

  for (const act of acts) {
    const actDir = join(STORY_DIR, act);
    if (existsSync(actDir)) {
      const files = await readdir(actDir);
      const actFiles = files
        .filter(file => file.endsWith('.md'))
        .sort()
        .map(file => join(actDir, file));
      mdFiles.push(...actFiles);
    }
  }

  if (mdFiles.length === 0) {
    console.error('❌ No markdown files found in story directory');
    process.exit(1);
  }

  console.log(`📂 Source: ${STORY_DIR}`);
  console.log(`📝 Files found: ${mdFiles.length}\n`);
  
  let currentAct = '';
  mdFiles.forEach(file => {
    const actName = basename(dirname(file));
    if (actName !== currentAct) {
      currentAct = actName;
      console.log(`\n   ${actName}:`);
    }
    console.log(`   • ${basename(file)}`);
  });
  console.log('');

  // Output file
  const dateStamp = formatDate();
  const outputFile = join(OUTPUT_DIR, `The-Heir-Condition-${dateStamp}.epub`);

  // Build Pandoc command
  const inputFiles = mdFiles.map(f => `"${f}"`).join(' ');
  
  const pandocCmd = [
    'pandoc',
    inputFiles,
    `-o "${outputFile}"`,
    '--toc',
    '--toc-depth=2',
    `--metadata=title:"${METADATA.title}"`,
    `--metadata=author:"${METADATA.author}"`,
    `--metadata=lang:${METADATA.language}`,
    `--metadata=date:${METADATA.date}`,
    '--epub-chapter-level=1',
    '--standalone',
  ].join(' ');

  console.log('🔨 Running Pandoc...\n');

  try {
    execSync(pandocCmd, { stdio: 'inherit', shell: true });
    console.log('\n✨ EPUB build complete!');
    console.log(`📖 Output: ${outputFile}\n`);
    
    // Get file size
    const { stat } = await import('fs/promises');
    const stats = await stat(outputFile);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`📊 File size: ${sizeMB} MB`);
    
  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Run the script
buildEpub();

