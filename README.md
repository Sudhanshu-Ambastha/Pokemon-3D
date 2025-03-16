# Pokémon 3D Models
Welcome to the **Pokémon 3D Model Viewer**! This project allows users to view Pokémon in 3D using the `<model-viewer>` component. The app fetches data about Pokémon, displays their names, and lets users preview 3D models of various Pokémon.
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,npm,nodejs,react,express,mongo,threejs,postman,githubactions" />
  </a>
</p>

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
  - [Optimizing 3D Models](#optimizing-3d-models)
    - [CLI Command for Optimization](#cli-command-for-optimization)
  - [Converting .glb Models to JSX Components](#converting-glb-models-to-jsx-components)
    - [Steps to Convert `.glb` to `.jsx`](#steps-to-convert-glb-to-jsx)
  - [Dependencies](#dependencies)
  - [Pokémon Categories and Counts](#pokémon-categories-and-counts)
  - [| **Origin Forms** | 3 | 3 | Origin Forms represent the true or primal state of certain legendary Pokémon, showcasing their full power and unique design. i.e  Giratina, and Dialga/Palkia.          |](#-origin-forms--3--3--origin-forms-represent-the-true-or-primal-state-of-certain-legendary-pokémon-showcasing-their-full-power-and-unique-design-ie--giratina-and-dialgapalkia----------)
  - [Note About APIs](#note-about-apis)
  - [Check Model Animations](#check-model-animations)
  - [Credits](#credits)
  - [License](#license)
  - [Legal Notice](#legal-notice)
    - [The Pokémon3D project community](#the-pokémon3d-project-community)
  - [Contributors](#contributors)

---

## Features
- View Pokémon in 3D directly in the browser.
- Click on a Pokémon to preview its 3D model in a modal view.
- The app fetches Pokémon data dynamically from a JSON file or MongoDB, displaying it in a grid layout.
- Easy to extend by adding new Pokémon 3D models.

---

## Using the API

To fetch Pokémon data from this project for use in your own applications, you can consult the [documentation](https://documenter.getpostman.com/view/29725199/2sAYX8KMU8) or examine the provided [`example.html`](./UI/example.html) file. Modify the example as needed for your specific use case, or follow these steps:

### API Endpoint
The Pokémon data is exposed as a JSON API. You can access it using the following URL:
```
https://pokemon3d-api.onrender.com/v1/
```

You can use this endpoint to fetch the JSON data and use it in your applications to display Pokémon 3D models.

Example of fetching data with JavaScript:
```
fetch('https://pokemon3d-api.onrender.com/v1/${Form}')
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
4. **Make Your Changes**: Add new Pokémon models in the models and within the folder according to pokemon form and implement any necessary changes.
5. **Commit Your Changes**: Commit your changes with a meaningful message.
    ```bash
    git commit -m "Added new Pokémon model named 'Pikachu'"
    ```
6. **Push to Your Fork**: Push your changes to your fork on GitHub.
    ```bash
    git push origin add-new-pokemon-model
    ```
7. **Create a Pull Request**: Create a pull request to the main repository, describing your changes.


## How to Add More Models

To add new Pokémon models to the app, follow these steps:

1. **Find or Create a 3D Model**: Search for Pokémon 3D models that are in `.glb` or `.gltf` formats. You can find models on various 3D model websites or create your own.
2. **Update the `Regular.json`**: 
    - Add an entry for the new Pokémon.
    - Set the `model` property to the path of the 3D model.
    Example:
    ```json
   {
      "id": 25,
      "name": "Shiny Pikachu",
      "model": "https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/opt/shiny/25.glb",
      "JsxComp": "https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/gltfjsx/shiny/25.jsx"
    },
    ```
3. **Ensure the Model is Hosted**: You can either host the model yourself or use an external link to the model file. Ensure the model is accessible from the project.

```
npm install -g @gltf-transform/cli
npm install @gltf-transform/cli --save-dev
```

## Optimizing 3D Models

To ensure optimal performance, particularly for web-based applications, it's crucial to optimize 3D models. This involves reducing file sizes and improving rendering efficiency.

**Recommended Optimization Settings:**

For the best balance of visual quality and performance, we recommend optimizing your `.glb` models with the following settings:

* **Resolution:** Resize models to a maximum size of 1024x1024 pixels. This resolution provides good detail while keeping file sizes manageable.
* **Geometry Compression:** Use Draco compression to reduce the size of the model's geometry without significantly impacting visual quality.
* **Texture Compression:** Convert textures to WebP format, which offers excellent compression ratios and supports transparency.

For more detailed information on using gltf-transform, refer to the official documentation: [gltf-transform](https://gltf-transform.dev/cli).

### CLI Command for Optimization

Use the following `gltf-transform` command to resize and optimize your `.glb` models:
```bash
gltf-transform resize models/glb/regular/1.glb models/opt/regular/1.glb --width 1024 --height 1024 && gltf-transform optimize models/opt/regular/1.glb models/opt/regular/1.glb --compress draco --texture-compress webp
```

## Converting .glb Models to JSX Components

For developers using JSX/Next.js, working with `.glb` models directly can be challenging. Instead, we can convert `.glb` files to `.jsx` components, which makes rendering and interaction easier.

### Steps to Convert `.glb` to `.jsx`

1. **Install `gltfjsx`**  
   First, install the required package globally or locally using npm:
   ```bash
   npm i gltfjsx
   ```
2. **Navigate to the Directory**
   Move to the directory where your `.glb` file is stored:
   ```
   cd models/glb/
   ```
3. **Run the Conversion Command**
   Use the following command to convert a `.glb` file into a `.jsx` component:
   ```
   npx gltfjsx 150.glb -o ../../gltfjsx/shadow/150.jsx
   ```
   - 150.glb → The input .glb file
   - -o ../../gltfjsx/shadow/150.jsx → Output directory for the .jsx file
4. **Ensuring Default Export** After conversion, make sure the generated `.jsx` file exports the model as a default component. 
  If not, update the export statement at the end of the file:
  ```
  const  bulbasaur= (props) => {
  ---Content leave as it is---
  export default bulbasaur;
  ```
  This ensures that the component can be imported correctly without causing errors.


## Dependencies
```
cd server
npm i --save express
npm i --save-dev nodemon
npm i mongodb mongoose dotenv

npm init -y && npm install express mongoose body-parser cors
node server.js
```

## Pokémon Categories and Counts
This app supports various Pokémon forms and categories. Below is a breakdown of the available Pokémon models and their counts:

| **Category**       | **Available** | **Total** | **Description**                                                                 |
|---------------------|---------------|-----------|---------------------------------------------------------------------------------|
| **Regular Forms**   | 950            | 1028      | Standard Pokémon forms from Generations 1 to 9 including male & female.        |
| **Shiny Forms**     | 56            | 1028      | Alternate color variants of all standard Pokémon.                              |
| **Gigantamax**      | 10             | 32        | Special forms of select Pokémon with unique appearances in *Sword and Shield*. |
| **Mega Evolutions** | 48             | 49        | Includes both single Mega forms and X/Y variants.                              |
| **MegaShiny Evolutions** | 4         | 49        | Includes both single Mega forms and X/Y variants.                              |
| **Hisuian Forms**   | 17            | 17        | Regional variants from *Pokémon Legends: Arceus*.                              |
| **Alolan Forms**    | 12             | 18        | Regional variants introduced in *Pokémon Sun and Moon*.                        |
| **Galarian Forms**  | 11             | 20        | Regional variants from *Pokémon Sword and Shield*.                             |
| **Primal Forms**    | 2             | 2         | Primal Groudon and Primal Kyogre.                                              |
| **Unique Forms** | 4            | 4         | Ash's Greninja, Armoured Mewtwo, Eternamax Eternatus, Ultra Necrozma              |
| **Shadow Forms** | 3 | 131 | Dark, corrupted versions of Pokémon often seen in Pokémon Colosseum and XD: Gale of Darkness.         |
| **Fusion Forms** | 3 | 6 | Kyurem (black/white), Necrozma (Dusk Mane/Dawn Wings), Calyrex (Ice Rider/Shadow Rider)           |
| **Origin Forms** | 3 | 3 | Origin Forms represent the true or primal state of certain legendary Pokémon, showcasing their full power and unique design. i.e  Giratina, and Dialga/Palkia.          |
---

## Note About APIs
While there are many Pokémon APIs available that provide Pokémon data (e.g., stats, types, moves, etc.), most of these APIs do not offer 3D models of Pokémon.  This is primarily due to the significant storage and bandwidth requirements for hosting and serving 3D models, as well as potential licensing issues.  Existing APIs like [PokéAPI](https://pokeapi.co/) are excellent resources for general Pokémon information, but they do not include 3D models.

## Check Model Animations
To verify whether a model contains animations or to inspect its structure, you can use the **[3D Preview](https://marketplace.visualstudio.com/items?itemName=mohitkumartoshniwal.3d-preview)** extension in Visual Studio Code. This extension allows you to preview 3D models directly in the editor, making it easier to inspect and test your models.
1. Upload your `.glb` or `.gltf` file to Visual Studio Code, or open it using Visual Studio Code.  
2. If the extension is set as the default, you can easily open the 3D model from the sidebar or by right-clicking the file and selecting **3D Preview**.  
3. If the model contains animations, they will appear in a dropdown menu; otherwise, no animations will be shown.

## Credits
Check [Credits.md](./docs/CREDITS.md) for a list of contributors and resources used in this project.  This project is a community-driven effort
to provide a comprehensive and accessible 3D model database for Pokémon.  We appreciate the contributions of
everyone who has helped make this project a reality.  If you have any questions or would like to
contribute, please don't hesitate to reach out.  We're always happy to help and appreciate
any assistance you can provide.  Thank you for your interest in this project!

## License
This project is open source and available under the [![GitHub License](https://img.shields.io/github/license/Sudhanshu-Ambastha/Pokemon-3D)](./docs/LICENSE). ![GitHub Tag](https://img.shields.io/github/v/tag/Sudhanshu-Ambastha/Pokemon-3D)

## Legal Notice

For more information about the legal considerations related to this project, please see the [COPYRIGHT.md](./docs/COPYRIGHT.md) file.

### The Pokémon3D project community 
Join our Discord: [![Join us on Discord](https://img.shields.io/discord/mycoolserver?label=Join%20us%20on%20Discord&logo=discord&style=social)](https://discord.gg/4JptVPw8qn)

<h1 align="center">Don't just clone 🤖 it, also star 🌟 it!</h1>

## Contributors
<a href = "https://github.com/Sudhanshu-Ambastha/Pokemon-3D/contributors">
  <img src = "https://contrib.rocks/image?repo=Sudhanshu-Ambastha/Pokemon-3D"/>
</a>
