import json
import os

def merge_pokemon_data(json_dir, output_file, model_url_base):
    merged_data = {"pokemon": []}
    pokemon_map = {}
    acceptable_forms = ["regular", "shiny", "gmax", "alolan", "galar", "hisuian", "mega", "xy", "unique", "primal", "origin", "multiform"]

    regular_file = os.path.join(json_dir, "regular.json")
    if os.path.exists(regular_file):
        process_form_file(regular_file, pokemon_map, model_url_base)

    for filename in os.listdir(json_dir):
        form_name = os.path.splitext(filename)[0].lower()
        if filename.endswith(".json") and form_name in acceptable_forms and form_name != "regular":
            filepath = os.path.join(json_dir, filename)
            process_form_file(filepath, pokemon_map, model_url_base)


    merged_pokemon_list = list(pokemon_map.values())
    merged_pokemon_list.sort(key=lambda x: x["id"])

    merged_data["pokemon"] = merged_pokemon_list

    with open(output_file, "wt") as f:
        json.dump(merged_data, f, indent=2)

def process_form_file(filepath, pokemon_map, model_url_base):
    form_name = os.path.splitext(os.path.basename(filepath))[0].lower()
    try:
        with open(filepath, "r") as f:
            data = json.load(f)
            if "pokemon" in data and isinstance(data["pokemon"], list):
                for pokemon in data["pokemon"]:
                    pokemon_id = pokemon.get("id")
                    pokemon_name = pokemon.get("name")

                    if pokemon_id is not None:
                        if pokemon_id in pokemon_map:
                            existing_pokemon = pokemon_map[pokemon_id]
                            existing_pokemon["forms"].append({"name": pokemon_name, "model": f"{model_url_base}/{form_name}/{pokemon_id}.glb", "formName": form_name})
                        else:
                            pokemon_map[pokemon_id] = {
                                "id": pokemon_id,
                                "forms": [{"name": pokemon_name, "model": f"{model_url_base}/{form_name}/{pokemon_id}.glb", "formName": form_name}]
                            }
                    else:
                        print(f"Warning: Pokemon with missing 'id' found in {os.path.basename(filepath)}")
            else:
                print(f"Warning: 'pokemon' key not found or not a list in {os.path.basename(filepath)}")
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error processing {os.path.basename(filepath)}: {e}")

json_directory1 = "models/json"
output_json_file1 = "Merged.json"
model_url1 = "https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb"

json_directory2 = "models/optJson"
output_json_file2 = "MergedOpt.json"
model_url2 = "https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/opt"

merge_pokemon_data(json_directory1, output_json_file1, model_url1)
print(f"Merged JSON saved to {output_json_file1}")

merge_pokemon_data(json_directory2, output_json_file2, model_url2)
print(f"Merged JSON saved to {output_json_file2}")