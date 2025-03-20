#!/bin/bash

# Paths
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
OPTIMIZED_DIR="$SCRIPT_DIR/../models/optJson"
NON_OPTIMIZED_DIR="$SCRIPT_DIR/../models/json"
OUTPUT_DIR="$SCRIPT_DIR/../jsons/merged"

OPTIMIZED_OUTPUT="$OUTPUT_DIR/merged_optimized.json"
NON_OPTIMIZED_OUTPUT="$OUTPUT_DIR/merged_non_optimized.json"

# Ensure output directory exists
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

# Function to validate and normalize JSON structure
validate_json() {
    local file="$1"
    if ! jq empty "$file" 2>/dev/null; then
        echo "❌ Invalid JSON detected in $file. Skipping..."
        return 1
    fi
    return 0
}

# Function to merge Pokémon data
merge_pokemon_json() {
    local json_dir="$1"
    local output_file="$2"

    # Ensure JSON files exist
    if ! check_json_files "$json_dir"; then
        echo '{ "pokemon": [] }' > "$output_file"
        return
    fi

    echo "🔄 Processing JSON files in $json_dir..."

    # Collect valid JSON files
    valid_files=()
    for file in "$json_dir"/*.json; do
        if validate_json "$file"; then
            valid_files+=("$file")
        fi
    done

    # Ensure there are valid JSON files
    if [ ${#valid_files[@]} -eq 0 ]; then
        echo "⚠️ No valid JSON files found in $json_dir"
        echo '{ "pokemon": [] }' > "$output_file"
        return
    fi

    # Merge and group Pokémon by ID and form
    merged_json=$(jq -s '
        reduce .[] as $file (
            {};
            reduce $file.pokemon[] as $p (
                .;
                ($p | {id, name, form, model}) as $entry |
                .[$entry.id|tostring] |= (if . then . else {id: $entry.id, name: $entry.name, forms: {}} end) |
                .[$entry.id|tostring].forms[$entry.form] = $entry.model
            )
        ) | { pokemon: [.[]] }
    ' "${valid_files[@]}")

    # Save output
    echo "$merged_json" > "$output_file"
    echo "✅ Merged JSON saved to $output_file"
}

echo "🔄 Merging Pokémon JSON files..."

# Process optimized and non-optimized JSONs separately
merge_pokemon_json "$OPTIMIZED_DIR" "$OPTIMIZED_OUTPUT"
merge_pokemon_json "$NON_OPTIMIZED_DIR" "$NON_OPTIMIZED_OUTPUT"

echo "✅ JSON files successfully merged!"
