#!/bin/bash

SRC_DIR="models/opt"
DEST_DIR="models/gltfjsx"

echo "🔄 Checking GLB files for conversion..."
modified=false
all_present=true

find "$SRC_DIR" -type f -name "*.glb" | while read -r glb_file; do
  # Extract folder and filename
  folder=$(dirname "${glb_file#$SRC_DIR/}") # Get folder inside models/glb
  filename=$(basename -- "$glb_file")
  modelname="${filename%.glb}"
  jsx_file="$DEST_DIR/$folder/$modelname.jsx"

  # Check if JSX file exists and is up to date
  if [[ -f "$jsx_file" && $(stat -c %Y "$jsx_file") -gt $(( $(stat -c %Y "$glb_file") + 1 )) ]]; then
    continue # Skip if JSX file is newer than GLB + 1 second
  fi

  # Create directory if not exists
  mkdir -p "$DEST_DIR/$folder"

  # Process the GLB file
  npx gltfjsx@6.5.3 "$glb_file" -o "$jsx_file"
  modified=true
  all_present=false
  echo "🔄 Converted: $glb_file to $jsx_file" # Informative Message.
done

# Print the appropriate message
if [ "$modified" = true ]; then
  echo "✅ Conversion completed!"
elif [ "$all_present" = true ]; then
  echo "✨ All already present!"
fi