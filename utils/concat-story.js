#!/usr/bin/env node

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

// Get current file's directory (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define paths
const PROJECT_ROOT = dirname(__dirname);
const STORY_DIR = join(PROJECT_ROOT, 'The Heir Condition', '04-story');
const DRAFTS_DIR = join(PROJECT_ROOT, 'drafts');

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
 * Format date for display
 */
function formatDisplayDate(date = new Date()) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Get all markdown files from story directory (recursively through Acts)
 */
async function getStoryFiles() {
  const acts = ['Act 1', 'Act 2', 'Act 3', 'Appendix'];
  const allFiles = [];

  for (const act of acts) {
    const actDir = join(STORY_DIR, act);
    if (existsSync(actDir)) {
      const files = await readdir(actDir);
      const mdFiles = files
        .filter(file => file.endsWith('.md'))
        .sort()
        .map(file => ({
          path: join(actDir, file),
          name: file,
          act: act
        }));
      allFiles.push(...mdFiles);
    }
  }

  return allFiles;
}

/**
 * Main concatenation function
 */
async function concatenateStory() {
  try {
    console.log('🚀 Starting story concatenation...\n');

    // Check if source directory exists
    if (!existsSync(STORY_DIR)) {
      throw new Error(`Source directory not found: ${STORY_DIR}`);
    }

    // Create date-stamped output directory
    const dateStamp = formatDate();
    const outputDir = join(DRAFTS_DIR, dateStamp);
    await mkdir(outputDir, { recursive: true });

    const outputFile = join(outputDir, 'The Heir Condition.md');

    console.log(`📂 Source: ${STORY_DIR}`);
    console.log(`📝 Output: ${outputFile}\n`);

    // Get all story files
    const storyFiles = await getStoryFiles();

    if (storyFiles.length === 0) {
      throw new Error('No markdown files found in story directory');
    }

    // Build the concatenated content
    let content = '';

    // Add header
    content += '# The Heir Condition\n\n';
    content += `Compiled: ${formatDisplayDate()}\n\n`;
    content += '---\n\n';

    // Process each file
    let currentAct = '';
    for (const file of storyFiles) {
      // Add act header if we're entering a new act
      if (file.act !== currentAct) {
        currentAct = file.act;
        content += `\n# ${currentAct}\n\n`;
        console.log(`\n📖 ${currentAct}:`);
      }

      console.log(`  ✓ Adding: ${file.name}`);
      
      const fileContent = await readFile(file.path, 'utf-8');
      
      // Add source comment
      content += `\n<!-- Source: ${file.act}/${file.name} -->\n\n`;
      
      // Add file content
      content += fileContent;
      
      // Add spacing between files
      content += '\n\n';
    }

    // Write the concatenated file
    await writeFile(outputFile, content, 'utf-8');

    console.log('\n✨ Concatenation complete!');
    console.log(`📄 Output saved to: ${outputFile}`);
    console.log(`📊 Total files processed: ${storyFiles.length}\n`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
concatenateStory();


