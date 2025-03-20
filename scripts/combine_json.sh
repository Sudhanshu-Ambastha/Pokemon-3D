#!/bin/bash

# Paths (Modify as needed)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
OPTIMIZED_DIR="$SCRIPT_DIR/../models/optJson"
NON_OPTIMIZED_DIR="$SCRIPT_DIR/../models/json"
OPTIMIZED_OUTPUT="./merged_optimized.json"
NON_OPTIMIZED_OUTPUT="./merged_non_optimized.json"

# Initialize empty JSON structure
echo '{ "pokemon": [] }' > "$OPTIMIZED_OUTPUT"
echo '{ "pokemon": [] }' > "$NON_OPTIMIZED_OUTPUT"

# Function to group Pokémon by ID and forms
group_pokemon_by_id() {
    local json_dir="$1"
    local output_file="$2"

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
    ' "$json_dir"/*.json)

    # Write to output file
    echo "$merged_json" > "$output_file"
}

# Merge optimized and non-optimized JSONs separately with form grouping
group_pokemon_by_id "$OPTIMIZED_DIR" "$OPTIMIZED_OUTPUT"
group_pokemon_by_id "$NON_OPTIMIZED_DIR" "$NON_OPTIMIZED_OUTPUT"

echo "✅ JSON files merged and grouped successfully!"
echo "📂 Optimized JSON saved to: $OPTIMIZED_OUTPUT"
echo "📂 Non-optimized JSON saved to: $NON_OPTIMIZED_OUTPUT"
