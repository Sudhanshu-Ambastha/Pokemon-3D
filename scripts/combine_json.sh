#!/bin/bash

# Paths to JSON files
REGULAR_JSON="../json/Regular.json"
SHINY_JSON="../json/Shiny.json"
MEGA_JSON="../json/mega.json"
XY_JSON="../json/xy.json"
UNIQUE_JSON="../json/unique.json"
OUTPUT_JSON="./merged_optimized.json"

# Merge all JSON files properly
jq -s 'reduce .[] as $item ({}; 
    $item.pokemon | 
    reduce .[] as $poke (.;
        .[($poke.id|tostring)] += {
            "id": $poke.id,
            "name": (.[($poke.id|tostring)].name // $poke.name),
            "model": (.[($poke.id|tostring)].model // $poke.model),
            "forms": ((.[($poke.id|tostring)].forms // []) + [{
                "name": $poke.name,
                "model": $poke.model
            }])
        }
    )
) | 
    {pokemon: [.[]]}' \
    "$REGULAR_JSON" "$SHINY_JSON" "$MEGA_JSON" "$XY_JSON" "$UNIQUE_JSON" > "$OUTPUT_JSON"

echo "Merged JSON created at $OUTPUT_JSON"
