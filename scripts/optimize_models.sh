#!/bin/bash

INPUT_DIR="models/glb"
OUTPUT_DIR="models/opt"
ERROR_FILE="scripts/error.txt"

# Clear previous error file
> "$ERROR_FILE"

# Ensure output directory exists
mkdir -p "$OUTPUT_DIR"

process_file() {
  local input_file="$1"
  local output_file="$2"

  local input_dir=$(dirname "$input_file")
  local output_dir=$(dirname "$output_file")

  # Create output directory if it doesn't exist
  mkdir -p "$output_dir"

  npx gltf-transform resize "$input_file" "$output_file" --width 1024 --height 1024 && npx gltf-transform optimize "$output_file" "$output_file" --compress draco --texture-compress webp

  if [ $? -ne 0 ]; then
    echo "❌ Failed to optimize: $input_file"
    echo "$input_file" >> "$ERROR_FILE"
  fi
}

find "$INPUT_DIR" -type f -name "*.glb" | while read input_file; do
  local relative_path=$(echo "$input_file" | sed "s#^$INPUT_DIR##")
  local output_file="$OUTPUT_DIR$relative_path"

  process_file "$input_file" "$output_file"
done

if [ -s "$ERROR_FILE" ]; then
  echo "⚠️ Some files failed to optimize. Check $ERROR_FILE for details."
else
  echo "🎉 Optimization complete!"
fi