#!/bin/bash

# Script to concatenate all story files from 04-short into a single file
# in a date-stamped folder within drafts

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Define paths
SHORT_DIR="$PROJECT_ROOT/The Incompleteness of Empire/04-short"
DRAFTS_DIR="$PROJECT_ROOT/drafts"

# Create date stamp (format: DD-MM-YYYY)
DATE_STAMP=$(date +"%d-%m-%Y")

# Create the date-stamped folder
OUTPUT_DIR="$DRAFTS_DIR/$DATE_STAMP"
mkdir -p "$OUTPUT_DIR"

# Output file name
OUTPUT_FILE="$OUTPUT_DIR/The Incompleteness of Empire.md"

# Check if the short directory exists
if [ ! -d "$SHORT_DIR" ]; then
    echo "Error: Source directory not found: $SHORT_DIR"
    exit 1
fi

# Start with a fresh file
> "$OUTPUT_FILE"

echo "Concatenating story files..."
echo "Source: $SHORT_DIR"
echo "Output: $OUTPUT_FILE"
echo ""

# Add a title and date to the concatenated file
echo "# The Incompleteness of Empire" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "Compiled: $(date +"%B %d, %Y")" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "---" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Find all .md files in the short directory, sort them, and concatenate
# The files are numbered (00-, 01-, etc.) so they'll sort naturally
for file in "$SHORT_DIR"/*.md; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "Adding: $filename"
        
        # Add the file name as a comment/reference
        echo "" >> "$OUTPUT_FILE"
        echo "<!-- Source: $filename -->" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
        
        # Append the file contents
        cat "$file" >> "$OUTPUT_FILE"
        
        # Add spacing between files
        echo "" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
    fi
done

echo ""
echo "✓ Concatenation complete!"
echo "Output saved to: $OUTPUT_FILE"
echo ""


