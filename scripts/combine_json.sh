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

# Function to group Pokémon by ID and forms
group_pokemon_by_id() {
    local json_dir="$1"
    local output_file="$2"

    # Ensure JSON files exist before processing
    if ! check_json_files "$json_dir"; then
        echo '{ "pokemon": [] }' > "$output_file"
        return
    fi

    # Merge all Pokémon data from JSON files
    merged_json=$(jq -s '
        reduce .[] as $item (
            {};
            reduce $item.pokemon[] as $p (
                .;
                ($p | {id, name, forms: { (.form): .model } }) as $new_p |
                .[$new_p.id] |= (if . then . else {id: $new_p.id, name: $new_p.name, forms: {}} end) |
                .[$new_p.id].forms += $new_p.forms
            )
        ) | { pokemon: [.[]] }
    ' $(find "$json_dir" -maxdepth 1 -type f -name '*.json'))

    # Write to output file
    echo "$merged_json" > "$output_file"
}

echo "🔄 Merging Pokémon JSON files..."

# Merge optimized and non-optimized JSONs separately with form grouping
group_pokemon_by_id "$OPTIMIZED_DIR" "$OPTIMIZED_OUTPUT"
group_pokemon_by_id "$NON_OPTIMIZED_DIR" "$NON_OPTIMIZED_OUTPUT"

echo "✅ JSON files merged and grouped successfully!"
echo "📂 Optimized JSON saved to: $OPTIMIZED_OUTPUT"
echo "📂 Non-optimized JSON saved to: $NON_OPTIMIZED_OUTPUT"