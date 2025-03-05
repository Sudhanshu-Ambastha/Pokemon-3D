# Changelog

## v0.2.0 - Automated JSX Model Components (2025-02-23)

### **Enhancements & Fixes:**

* **Automated JSX Model Generation:**
    * Implemented a GitHub Actions workflow to automatically convert `.glb` models into optimized JSX components using `gltfjsx`.
    * This significantly simplifies the integration of 3D models into React and Next.js projects, allowing for direct component imports.
* **Improved React/Next.js Compatibility:**
    * Models are now available as ready-to-use JSX components, streamlining the development process for React and Next.js users.
    * This eliminates the need for manual `.glb` handling within these frameworks.
* **Updated Project Structure:**
    * Organized models into separate `glb` and `gltfjsx` directories for better project management.
* **Pathing Improvements:**
    * Ensured that the component paths are correctly set.
* **JSON Updates:**
    * Updated the JSON to correctly set the component name to match the file name.

### **Important Notes:**

* While this release automates the generation of JSX components, please note that not all models are currently available in this format. We are actively working to expand the model library.
* The GLB files are still hosted on githubusercontent.
* The github actions will automatically convert any new glb files that are added.
* Please ensure that you are using the correct component name from the json file.

### **Future Plans:**

* Continue to expand the library of available JSX model components.
* Further optimize the model-loading pipeline for enhanced performance.
* Improve documentation and examples for integrating models into React and Next.js projects.
* Add more pokemon models.

---

## v0.1.0 (2025-02-09)

This is the initial release of the Pokemon 3D API!  This API allows users to fetch 3D GLB models of Pokemon, with support for various forms.

**Features:**

* **3D Model Retrieval:** The API allows users to fetch 3D GLB models of Pokemon.
* **Supported Forms:** The following Pokemon forms are currently supported:
    * Regular Forms: Generations 1-6 (inclusive)
    * Hisuian Forms: All available Hisuian forms
    * Primal Forms: All available Primal forms
    * Origin Forms: All available Origin forms
    * Mega Evolutions: All Mega Evolutions *except* Manectric
    * XY Forms: All XY forms
* **Search and Filtering:** Basic search and filtering functionality is implemented, as demonstrated in the included `example.html` file.
* **Up-to-date Dependencies:** All dependencies and libraries have been updated to their latest versions.
* **Documentation:** Basic documentation is available via Postman: [https://documenter.getpostman.com/view/29725199/2sAYX8KMU8](https://documenter.getpostman.com/view/29725199/2sAYX8KMU8)

**Known Issues/Limitations:**

* **Incomplete Form Support:**  Shiny forms, Gigantamax forms, and other special forms are currently under development and not yet available.
* **Animated Models:** While many models are animated, not all models have animations.  Game-ready models are prioritized.
* **Model Availability:**  Not all Pokemon forms have 3D models available at this time. We are working to expand the model library.

**Future Plans:**

* We plan to add support for all remaining Pokemon forms, including Shiny, Gigantamax, and others.
* We will continue to expand the library of 3D models and animations.
* Further improvements to search and filtering are planned.
* We will continue to update the API to ensure it remains up-to-date with the latest versions of all dependencies.