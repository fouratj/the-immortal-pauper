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
 * Main concatenation function
 */
async function concatenateStory() {
  try {
    console.log('🚀 Starting story concatenation...\n');

    // Check if source directory exists
    if (!existsSync(SHORT_DIR)) {
      throw new Error(`Source directory not found: ${SHORT_DIR}`);
    }

    // Create date-stamped output directory
    const dateStamp = formatDate();
    const outputDir = join(DRAFTS_DIR, dateStamp);
    await mkdir(outputDir, { recursive: true });

    const outputFile = join(outputDir, 'The Incompleteness of Empire.md');

    console.log(`📂 Source: ${SHORT_DIR}`);
    console.log(`📝 Output: ${outputFile}\n`);

    // Read all markdown files from the source directory
    const files = await readdir(SHORT_DIR);
    const mdFiles = files
      .filter(file => file.endsWith('.md'))
      .sort(); // Natural sort works because files are prefixed with numbers

    if (mdFiles.length === 0) {
      throw new Error('No markdown files found in source directory');
    }

    // Build the concatenated content
    let content = '';

    // Add header
    content += '# The Incompleteness of Empire\n\n';
    content += `Compiled: ${formatDisplayDate()}\n\n`;
    content += '---\n\n';

    // Process each file
    for (const filename of mdFiles) {
      console.log(`  ✓ Adding: ${filename}`);
      
      const filePath = join(SHORT_DIR, filename);
      const fileContent = await readFile(filePath, 'utf-8');
      
      // Add source comment
      content += `\n<!-- Source: ${filename} -->\n\n`;
      
      // Add file content
      content += fileContent;
      
      // Add spacing between files
      content += '\n\n';
    }

    // Write the concatenated file
    await writeFile(outputFile, content, 'utf-8');

    console.log('\n✨ Concatenation complete!');
    console.log(`📄 Output saved to: ${outputFile}`);
    console.log(`📊 Total files processed: ${mdFiles.length}\n`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
concatenateStory();


