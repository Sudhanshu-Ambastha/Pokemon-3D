import React, { useState, useEffect } from 'react';

function App() {
  const [ModelComponent, setModelComponent] = useState(null);
  const modelName = "dynamicModel"; // Example: Get model name from API or props

  useEffect(() => {
    const loadModel = async () => {
      try {
        const module = await import(`./components/${modelName}.jsx`); // Dynamic import
        setModelComponent(() => module.default);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();
  }, [modelName]); // Add modelName to dependency array

  return (
    <div>
      <h1>Hello from Webpack!</h1>
      {ModelComponent ? <ModelComponent /> : <p>Loading model...</p>}
    </div>
  );
}

export default App;