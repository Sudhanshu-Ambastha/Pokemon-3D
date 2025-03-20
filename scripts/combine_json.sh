#!/bin/bash

# Paths (Modify as needed)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
OPTIMIZED_DIR="$SCRIPT_DIR/../models/optJson"
NON_OPTIMIZED_DIR="$SCRIPT_DIR/../models/json"
OUTPUT_DIR="$SCRIPT_DIR/../jsons/merged"

OPTIMIZED_OUTPUT="$OUTPUT_DIR/merged_optimized.json"
NON_OPTIMIZED_OUTPUT="$OUTPUT_DIR/merged_non_optimized.json"

# Ensure the output directory exists
mkdir -p "$OUTPUT_DIR"

# Function to check if JSON files exist
check_json_files() {
    local dir="$1"
    if [ -z "$(find "$dir" -maxdepth 1 -type f -name '*.json')" ]; then
        echo "⚠️ No JSON files found in $dir"
        return 1
    fi
    return 0
}

# Function to merge Pokémon data from JSON files
merge_pokemon_json() {
    local json_dir="$1"
    local output_file="$2"

    # Ensure JSON files exist before processing
    if ! check_json_files "$json_dir"; then
        echo '{ "pokemon": [] }' > "$output_file"
        return
    fi

    echo "🔄 Processing JSON files in $json_dir..."

    # Merge and group Pokémon by ID and form
    merged_json=$(jq -s '
        reduce .[] as $file (
            {};
            reduce $file.pokemon[] as $p (
                .;
                ($p | {id, name, form, model}) as $entry |
                .[$entry.id] |= (if . then . else {id: $entry.id, name: $entry.name, forms: {}} end) |
                .[$entry.id].forms[$entry.form] = $entry.model
            )
        ) | { pokemon: [.[]] }
    ' $(find "$json_dir" -maxdepth 1 -type f -name '*.json'))

    # Save to output file
    echo "$merged_json" > "$output_file"

    echo "✅ Merged JSON saved to $output_file"
}

echo "🔄 Merging Pokémon JSON files..."

# Process both optimized and non-optimized JSONs
merge_pokemon_json "$OPTIMIZED_DIR" "$OPTIMIZED_OUTPUT"
merge_pokemon_json "$NON_OPTIMIZED_DIR" "$NON_OPTIMIZED_OUTPUT"

echo "✅ JSON files successfully merged!"