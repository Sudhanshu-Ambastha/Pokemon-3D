import json
import os

def merge_pokemon_data(json_dir, output_file):
    merged_data = {"pokemon": []}
    pokemon_map = {}

    for filename in os.listdir(json_dir):
        if filename.endswith(".json"):
            filepath = os.path.join(json_dir, filename)
            try:
                with open(filepath, "r") as f:
                    data = json.load(f)
                    if "pokemon" in data and isinstance(data["pokemon"], list):
                        for pokemon in data["pokemon"]:
                            pokemon_id = pokemon.get("id")
                            pokemon_name = pokemon.get("name")
                            form_name = os.path.splitext(filename)[0].lower()

                            if pokemon_id is not None:
                                if pokemon_id in pokemon_map:
                                    existing_pokemon = pokemon_map[pokemon_id]
                                    existing_pokemon["forms"].append({"name": pokemon_name, "model": f"https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/{form_name}/{pokemon_id}.glb", "formName": form_name})
                                else:
                                    pokemon_map[pokemon_id] = {
                                        "id": pokemon_id,
                                        "forms": [{"name": pokemon_name, "model": f"https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/{form_name}/{pokemon_id}.glb", "formName": form_name}]
                                    }

                            else:
                                print(f"Warning: Pokemon with missing 'id' found in {filename}")

                    else:
                        print(f"Warning: 'pokemon' key not found or not a list in {filename}")

            except (FileNotFoundError, json.JSONDecodeError) as e:
                print(f"Error processing {filename}: {e}")

    merged_data["pokemon"] = list(pokemon_map.values())

    print(f"merged_data: {merged_data}") #Debug print merged data

    with open(output_file, "wt") as f: #Explicitly open in write text mode
        json.dump(merged_data, f, indent=2)

json_directory = "./models/json"
output_json_file = "./merged_optimized.json" #Absolute path

merge_pokemon_data(json_directory, output_json_file)
print(f"Merged JSON saved to {output_json_file}")