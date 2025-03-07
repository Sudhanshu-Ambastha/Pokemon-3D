#!/bin/bash

# Define paths
GLB_DIR="models/glb"
JSX_DIR="models/gltfjsx"
LOG_FILE="scripts/missing_files.txt"

# Ensure logs directory exists
mkdir -p logs
> "$LOG_FILE"  # Clear previous log file

echo "🔍Checking for missing JSX files..."

# Iterate over all .glb files
find "$GLB_DIR" -type f -name "*.glb" | while read -r glb_file; do
    # Extract relative path and change extension to .jsx
    rel_path="${glb_file#$GLB_DIR/}"
    jsx_file="$JSX_DIR/${rel_path%.glb}.jsx"

    # Check if the corresponding .jsx file exists
    if [ ! -f "$jsx_file" ]; then
        echo "$glb_file" >> "$LOG_FILE"
    fi
done

# Display results
if [ -s "$LOG_FILE" ]; then
    echo "📄Missing JSX files logged in $LOG_FILE"
else
    echo "⛔No missing JSX files found."
    echo "⛔No missing files found" > "$LOG_FILE"
fi
