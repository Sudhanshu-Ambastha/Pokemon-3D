```
npm init -y
```
```
npm install react react-dom @react-three/fiber @react-three/drei three three-stdlib
```
```
npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin clean-webpack-plugin --save-dev
```
```
npm install clean-webpack-plugin --save-dev
```
```
npm install @babel/preset-react --save-dev
```

```
webpack/
│── src/                <-- React & JSX files go here
│   ├── index.js        <-- Entry point
│   ├── App.js          <-- Main React Component
│   ├── components/     <-- For JSX components
│   │   ├── DynamicModel.jsx  <-- Dynamically loads models
│── public/             <-- For static files like index.html
│   ├── index.html      <-- Main HTML file
│── webpack.config.js   <-- Webpack configuration
│── .babelrc            <-- Babel settings
│── package.json        <-- Dependencies
│── node_modules/       <-- Installed packages
│── dist/               <-- Generated build files (auto-created)
```