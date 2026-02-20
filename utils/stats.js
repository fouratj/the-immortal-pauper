#!/usr/bin/env node

import { readdir, readFile } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

// Get current file's directory (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define paths
const PROJECT_ROOT = dirname(__dirname);
const STORY_DIR = join(PROJECT_ROOT, 'The Heir Condition', '04-story');

/**
 * Count words in text (excludes markdown syntax, HTML comments)
 */
function countWords(text) {
  // Remove HTML comments
  let cleaned = text.replace(/<!--[\s\S]*?-->/g, '');
  
  // Remove markdown headers (#)
  cleaned = cleaned.replace(/^#+\s+/gm, '');
  
  // Remove markdown links but keep the text [text](url) -> text
  cleaned = cleaned.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
  
  // Remove markdown images
  cleaned = cleaned.replace(/!\[([^\]]*)\]\([^\)]+\)/g, '');
  
  // Remove code blocks
  cleaned = cleaned.replace(/```[\s\S]*?```/g, '');
  
  // Remove inline code
  cleaned = cleaned.replace(/`[^`]+`/g, '');
  
  // Remove emphasis markers but keep the text
  cleaned = cleaned.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1');
  
  // Split by whitespace and filter out empty strings
  const words = cleaned.split(/\s+/).filter(word => word.length > 0);
  
  return words.length;
}

/**
 * Count characters (excluding spaces)
 */
function countCharacters(text) {
  // Remove HTML comments
  let cleaned = text.replace(/<!--[\s\S]*?-->/g, '');
  
  // Remove all whitespace
  cleaned = cleaned.replace(/\s+/g, '');
  
  return cleaned.length;
}

/**
 * Estimate reading time in minutes
 */
function estimateReadingTime(wordCount) {
  const wordsPerMinute = 250; // Average reading speed
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  if (minutes < 60) {
    return `${minutes} min`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
  }
}

/**
 * Estimate page count based on word count
 * ~250 words per page for manuscripts (double-spaced)
 * ~300 words per page for published paperbacks
 * ~200 words per page for ePub/Kindle (larger fonts, smaller screens)
 */
function estimatePageCount(wordCount, format = 'manuscript') {
  const wordsPerPage = {
    'manuscript': 250,
    'published': 300,
    'epub': 200
  };
  return Math.ceil(wordCount / (wordsPerPage[format] || 250));
}

/**
 * Count paragraphs
 */
function countParagraphs(text) {
  // Split by double newlines (paragraph breaks)
  const paragraphs = text
    .split(/\n\s*\n/)
    .filter(para => para.trim().length > 0);
  
  return paragraphs.length;
}

/**
 * Count sentences (rough estimate)
 */
function countSentences(text) {
  // Remove code blocks and comments
  let cleaned = text.replace(/```[\s\S]*?```/g, '');
  cleaned = cleaned.replace(/<!--[\s\S]*?-->/g, '');
  
  // Split by sentence endings
  const sentences = cleaned.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  return sentences.length;
}

/**
 * Calculate average words per sentence
 */
function averageWordsPerSentence(wordCount, sentenceCount) {
  if (sentenceCount === 0) return 0;
  return Math.round(wordCount / sentenceCount);
}

/**
 * Analyze a single file
 */
async function analyzeFile(filePath) {
  const content = await readFile(filePath, 'utf-8');
  const filename = basename(filePath);
  
  const words = countWords(content);
  const characters = countCharacters(content);
  const paragraphs = countParagraphs(content);
  const sentences = countSentences(content);
  const avgWordsPerSentence = averageWordsPerSentence(words, sentences);
  const readingTime = estimateReadingTime(words);
  
  const pageCount = estimatePageCount(words);
  
  return {
    filename,
    words,
    characters,
    paragraphs,
    sentences,
    avgWordsPerSentence,
    readingTime,
    pageCount
  };
}

/**
 * Format number with commas
 */
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Print a table row
 */
function printRow(col1, col2, col3, col4) {
  console.log(
    `  ${col1.padEnd(30)} ${col2.padStart(10)} ${col3.padStart(12)} ${col4.padStart(12)}`
  );
}

/**
 * Print divider
 */
function printDivider() {
  console.log('  ' + '─'.repeat(68));
}

/**
 * Get all markdown files from story directory (recursively through Acts)
 */
async function getStoryFiles() {
  const entries = await readdir(STORY_DIR, { withFileTypes: true });
  const actDirs = entries
    .filter(e => e.isDirectory())
    .map(e => e.name)
    .sort();

  const allFiles = [];

  for (const act of actDirs) {
    const actDir = join(STORY_DIR, act);
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

  return allFiles;
}

/**
 * Main statistics function
 */
async function generateStats() {
  try {
    console.log('\n📊 Generating Story Statistics...\n');

    // Check if source directory exists
    if (!existsSync(STORY_DIR)) {
      throw new Error(`Source directory not found: ${STORY_DIR}`);
    }

    // Get all story files
    const storyFiles = await getStoryFiles();

    if (storyFiles.length === 0) {
      throw new Error('No markdown files found in story directory');
    }

    // Analyze each file
    const stats = [];
    for (const file of storyFiles) {
      const fileStats = await analyzeFile(file.path);
      fileStats.act = file.act; // Add act information
      stats.push(fileStats);
    }

    // Calculate totals
    const totals = stats.reduce((acc, stat) => ({
      words: acc.words + stat.words,
      characters: acc.characters + stat.characters,
      paragraphs: acc.paragraphs + stat.paragraphs,
      sentences: acc.sentences + stat.sentences
    }), { words: 0, characters: 0, paragraphs: 0, sentences: 0 });

    const totalReadingTime = estimateReadingTime(totals.words);
    const avgWordsPerFile = Math.round(totals.words / stats.length);
    const avgWordsPerSentence = averageWordsPerSentence(totals.words, totals.sentences);
    const manuscriptPages = estimatePageCount(totals.words, 'manuscript');
    const publishedPages = estimatePageCount(totals.words, 'published');
    const epubPages = estimatePageCount(totals.words, 'epub');

    // Print individual file stats
    console.log('📄 Individual Chapter Statistics\n');
    printDivider();
    printRow('Chapter', 'Words', 'Paragraphs', 'Reading Time');
    printDivider();

    let currentAct = '';
    stats.forEach(stat => {
      // Print act header if we're entering a new act
      if (stat.act !== currentAct) {
        currentAct = stat.act;
        console.log(`\n  ${currentAct}\n`);
      }

      const shortName = stat.filename.replace('.md', '');
      printRow(
        '  ' + shortName,
        formatNumber(stat.words),
        formatNumber(stat.paragraphs),
        stat.readingTime
      );
    });

    printDivider();
    console.log();

    // Print summary statistics
    console.log('📈 Summary Statistics\n');
    console.log(`  Total Chapters:            ${stats.length}`);
    console.log(`  Total Words:               ${formatNumber(totals.words)}`);
    console.log(`  Total Characters:          ${formatNumber(totals.characters)}`);
    console.log(`  Total Paragraphs:          ${formatNumber(totals.paragraphs)}`);
    console.log(`  Total Sentences:           ${formatNumber(totals.sentences)}`);
    console.log(`  Average Words/Chapter:     ${formatNumber(avgWordsPerFile)}`);
    console.log(`  Average Words/Sentence:    ${avgWordsPerSentence}`);
    console.log(`  Estimated Reading Time:    ${totalReadingTime}`);
    console.log(`  Est. Pages (Kindle/ePub):  ~${formatNumber(epubPages)} pages`);
    console.log(`  Est. Pages (Manuscript):   ~${formatNumber(manuscriptPages)} pages`);
    console.log(`  Est. Pages (Paperback):    ~${formatNumber(publishedPages)} pages`);
    console.log();

    // Print progress towards common word count milestones
    console.log('🎯 Progress Milestones\n');
    const milestones = [
      { name: 'Flash Fiction', words: 1000 },
      { name: 'Short Story', words: 7500 },
      { name: 'Novelette', words: 17500 },
      { name: 'Novella', words: 40000 },
      { name: 'Novel', words: 50000 },
      { name: 'Average Novel', words: 80000 },
      { name: 'Long Novel', words: 100000 }
    ];

    milestones.forEach(milestone => {
      const percentage = Math.min(100, Math.round((totals.words / milestone.words) * 100));
      const bar = '█'.repeat(Math.floor(percentage / 5)) + '░'.repeat(20 - Math.floor(percentage / 5));
      const status = percentage >= 100 ? '✓' : ' ';
      console.log(`  ${status} ${milestone.name.padEnd(20)} [${bar}] ${percentage}%`);
    });

    console.log();

    // Category classification
    let category = 'Flash Fiction';
    if (totals.words >= 100000) category = 'Long Novel';
    else if (totals.words >= 80000) category = 'Average Novel';
    else if (totals.words >= 50000) category = 'Novel';
    else if (totals.words >= 40000) category = 'Novella';
    else if (totals.words >= 17500) category = 'Novelette';
    else if (totals.words >= 7500) category = 'Short Story';

    console.log(`✨ Current Classification: ${category}\n`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
generateStats();

