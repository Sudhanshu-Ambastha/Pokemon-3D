# Pokémon 3D Models
Welcome to the **Pokémon 3D Model Viewer**! This project allows users to view Pokémon in 3D using the `<model-viewer>` component. The app fetches data about Pokémon, displays their names, and lets users preview 3D models of various Pokémon.

---

## Table of Contents
- [Pokémon 3D Models](#pokémon-3d-models)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Using the API](#using-the-api)
    - [API Endpoint](#api-endpoint)
  - [Contributing](#contributing)
    - [Steps to Contribute:](#steps-to-contribute)
  - [How to Add More Models](#how-to-add-more-models)
  - [Dependencies](#dependencies)
  - [Pokémon Categories and Counts](#pokémon-categories-and-counts)
  - [| **Origin Forms** | 3 | 3 | Origin Forms represent the true or primal state of certain legendary Pokémon, showcasing their full power and unique design. i.e  Giratina, and Dialga/Palkia.          |](#-origin-forms--3--3--origin-forms-represent-the-true-or-primal-state-of-certain-legendary-pokémon-showcasing-their-full-power-and-unique-design-ie--giratina-and-dialgapalkia----------)
  - [Note About APIs](#note-about-apis)
  - [Check Model Animations](#check-model-animations)
  - [Test the Viewer](#test-the-viewer)
  - [License](#license)
  - [Contributors](#contributors)

---

## Features
- View Pokémon in 3D directly in the browser.
- Click on a Pokémon to preview its 3D model in a modal view.
- The app fetches Pokémon data dynamically from a JSON file or MongoDB, displaying it in a grid layout.
- Easy to extend by adding new Pokémon 3D models.

---

## Using the API

If you want to fetch Pokémon data from this project to use in your own applications, follow these steps:

### API Endpoint
The Pokémon data is exposed as a JSON API. You can access it using the following URL:
```
https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/PokeData.json
```

You can use this endpoint to fetch the JSON data and use it in your applications to display Pokémon 3D models.

Example of fetching data with JavaScript:
```
fetch('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/PokeData.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
  })
  .catch(error => console.error('Error fetching data:', error));
```

## Contributing

We welcome contributions from the community! You can help by:

1. **Adding new 3D models** of Pokémon.
2. **Improving the user interface** and styling.
3. **Fixing bugs** and optimizing the app for better performance.
4. **Enhancing the code** with new features (like sorting Pokémon, filtering by type, etc.).
5. **Improving the documentation** for easier understanding and navigation.

### Steps to Contribute:
1. **Fork the Repository**: Fork the repo to your GitHub account.
2. **Clone your Fork**: Clone your fork to your local machine.
    ```bash
    git clone https://github.com/Sudhanshu-Ambastha/Pokemon-3D.git
    ```
3. **Create a Branch**: Create a new branch for your feature or bug fix.
    ```bash
    git checkout -b add-new-pokemon-model
    ```
4. **Make Your Changes**: Add new Pokémon models to the `PokeData.json` file and implement any necessary changes.
5. **Commit Your Changes**: Commit your changes with a meaningful message.
    ```bash
    git commit -m "Added new Pokémon model named 'Pikachu'"
    ```
6. **Push to Your Fork**: Push your changes to your fork on GitHub.
    ```bash
    git push origin add-new-pokemon-model
    ```
7. **Create a Pull Request**: Create a pull request to the main repository, describing your changes.

### The Pokémon 3D project community 
Join our Discord: [The Pokémon 3D project](https://discord.gg/4JptVPw8qn)

## How to Add More Models

To add new Pokémon models to the app, follow these steps:

1. **Find or Create a 3D Model**: Search for Pokémon 3D models that are in `.glb` or `.gltf` formats. You can find models on various 3D model websites or create your own.
2. **Update the `PokeData.json`**: 
    - Add an entry for the new Pokémon.
    - Set the `model` property to the path of the 3D model.
    Example:
    ```json
   {
      "id": 25,
      "name": "Pikachu",
      "model": "./models/25.glb"
    },
    ```
3. **Ensure the Model is Hosted**: You can either host the model yourself or use an external link to the model file. Ensure the model is accessible from the project.

## Dependencies
```
cd test
npm init -y && npm install express mongoose body-parser cors
node server.js
```

## Pokémon Categories and Counts

This app supports various Pokémon forms and categories. Below is a breakdown of the available Pokémon models and their counts:

| **Category**       | **Available** | **Total** | **Description**                                                                 |
|---------------------|---------------|-----------|---------------------------------------------------------------------------------|
| **Regular Forms**   | 943            | 1028      | Standard Pokémon forms from Generations 1 to 9 including male & female.                                |
| **Shiny Forms**     | 41            | 1025      | Alternate color variants of all standard Pokémon.                              |
| **Gigantamax**      | 10             | 32        | Special forms of select Pokémon with unique appearances in *Sword and Shield*. |
| **Mega Evolutions** | 48             | 48        | Includes both single Mega forms and X/Y variants.                              |
| **MegaShiny Evolutions** | 4         | 48        | Includes both single Mega forms and X/Y variants.                              |
| **Hisuian Forms**   | 17            | 17        | Regional variants from *Pokémon Legends: Arceus*.                              |
| **Alolan Forms**    | 12             | 18        | Regional variants introduced in *Pokémon Sun and Moon*.                        |
| **Galarian Forms**  | 11             | 20        | Regional variants from *Pokémon Sword and Shield*.                             |
| **Primal Forms**    | 2             | 2         | Primal Groudon and Primal Kyogre.                                              |
| **Unique Forms** | 4            | 4         | Ash's Greninja, Armoured Mewtwo, Eternamax Eternatus, Ultra Necrozma              |
| **Shadow Forms** | 3 | 131 | Dark, corrupted versions of Pokémon often seen in Pokémon Colosseum and XD: Gale of Darkness.           |
| **Fusion Forms** | 3 | 6 | Kyurem (black/white), Necrozma (Dusk Mane/Dawn Wings), Calyrex (Ice Rider/Shadow Rider)           |
| **Origin Forms** | 3 | 3 | Origin Forms represent the true or primal state of certain legendary Pokémon, showcasing their full power and unique design. i.e  Giratina, and Dialga/Palkia.          |
---

## Note About APIs

While there are many **Pokémon APIs** available that provide Pokémon data (e.g., stats, types, moves, etc.), **most of these APIs do not offer 3D models** of Pokémon. 

- **Why don't these APIs provide 3D models?**: Providing 3D models requires significant storage and bandwidth. Models are often large in size (several MBs), and hosting them for free or for public use can be difficult due to storage and bandwidth limitations.
- **Why don't we use other APIs?**: While you can retrieve detailed Pokémon information (like types, stats, and abilities) from APIs like [Pokémon API](https://pokeapi.co/), these services typically do not provide 3D models. As a result, it would be challenging to include those models in this app without substantial storage for model files.

## Check Model Animations

To verify whether a model contains animations or to inspect its structure, you can use the **[3D Preview](https://marketplace.visualstudio.com/items?itemName=mohitkumartoshniwal.3d-preview)** extension in Visual Studio Code. This extension allows you to preview 3D models directly in the editor, making it easier to inspect and test your models.
1. Upload your `.glb` or `.gltf` file to Visual Studio Code, or open it using Visual Studio Code.  
2. If the extension is set as the default, you can easily open the 3D model from the sidebar or by right-clicking the file and selecting **3D Preview**.  
3. If the model contains animations, they will appear in a dropdown menu; otherwise, no animations will be shown.

## Test the Viewer

Additionally, you can test the model viewer with the **Example.html** file included in the project. This file allows you to input a Pokémon ID and see if the 3D model is fetched from the API and displayed correctly in the browser.

To use this, simply open the `Example.html` file in your browser, enter a Pokémon ID, and click **Load Pokémon Model**. The viewer will fetch the 3D model from the API and display it. This serves as a test to ensure that the models are being fetched correctly and can also give you an idea of how to fetch and display Pokémon models in your own projects.

By using this example, you can verify if the API is working as expected and get familiar with how to integrate and display Pokémon 3D models in your app.

## License

This project is open source and available under the [MIT License](./LICENSE).

## Contributors
<a href = "https://github.com/Sudhanshu-Ambastha/Pokemon-3D/contributors">
  <img src = "https://contrib.rocks/image?repo=Sudhanshu-Ambastha/Pokemon-3D"/>
</a>
