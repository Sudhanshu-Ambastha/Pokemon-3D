#!/bin/bash
set -e

# Define directories
MODELS_DIR="models/gltfjsx"
WEBPACK_CONFIG="webpack/webpack.config.js"
WEBPACK_OUTPUT="webpack/dist/bundles"
WEBPACK_ERROR_LOG="scripts/error.txt" # Change to scripts/error.txt

# Ensure output directory exists
mkdir -p "$WEBPACK_OUTPUT"

# Clear existing error log
> "$WEBPACK_ERROR_LOG"

# Generate Webpack entry configuration
echo "🔄Generating Webpack entry configuration..."
echo "module.exports = {" > "$WEBPACK_CONFIG"
echo "  entry: {" >> "$WEBPACK_CONFIG"

# Iterate over model groups
find "$MODELS_DIR" -type d -mindepth 1 -maxdepth 1 | while read -r group_dir; do
  group=$(basename "$group_dir")

  # Iterate over models within each group
  find "$group_dir" -type f -name "*.jsx" | while read -r model_file; do
    model_name=$(basename "$model_file" .jsx)
    entry_name="$group-$model_name"
    entry_path="./$model_file"

    echo "    \"$entry_name\": \"$entry_path\"," >> "$WEBPACK_CONFIG"
  done
done

# Remove trailing comma if any
sed -i '$ s/,//' "$WEBPACK_CONFIG"

echo "  }," >> "$WEBPACK_CONFIG"
echo "  output: {" >> "$WEBPACK_CONFIG"
echo "    filename: '[name].bundle.js'," >> "$WEBPACK_CONFIG"
echo "    path: require('path').resolve(__dirname, '$WEBPACK_OUTPUT')," >> "$WEBPACK_CONFIG"
echo "    publicPath: '/bundles/'," >> "$WEBPACK_CONFIG"
echo "  }," >> "$WEBPACK_CONFIG"
echo "  module: {" >> "$WEBPACK_CONFIG"
echo "    rules: [" >> "$WEBPACK_CONFIG"
echo "      {" >> "$WEBPACK_CONFIG"
echo "        test: /\.jsx?$/," >> "$WEBPACK_CONFIG"
echo "        exclude: /node_modules/," >> "$WEBPACK_CONFIG"
echo "        use: {" >> "$WEBPACK_CONFIG"
echo "          loader: 'babel-loader'," >> "$WEBPACK_CONFIG"
echo "          options: {" >> "$WEBPACK_CONFIG"
echo "            presets: ['@babel/preset-react']," >> "$WEBPACK_CONFIG"
echo "          }," >> "$WEBPACK_CONFIG"
echo "        }," >> "$WEBPACK_CONFIG"
echo "      }," >> "$WEBPACK_CONFIG"
echo "    ]," >> "$WEBPACK_CONFIG"
echo "  }," >> "$WEBPACK_CONFIG"
echo "  resolve: {" >> "$WEBPACK_CONFIG"
echo "    extensions: ['.js', '.jsx']," >> "$WEBPACK_CONFIG"
echo "  }," >> "$WEBPACK_CONFIG"
echo "  optimization: {" >> "$WEBPACK_CONFIG"
echo "    splitChunks: {" >> "$WEBPACK_CONFIG"
echo "      chunks: 'all'," >> "$WEBPACK_CONFIG"
echo "    }," >> "$WEBPACK_CONFIG"
echo "  }," >> "$WEBPACK_CONFIG"
echo "};" >> "$WEBPACK_CONFIG"

echo "✅Webpack configuration generated."

# Run Webpack and capture errors
echo "🔄Running Webpack..."
npx webpack --config "$WEBPACK_CONFIG" 2> "$WEBPACK_ERROR_LOG"

# Check Webpack exit code
if [ $? -ne 0 ]; then
  echo "❌Webpack build failed. See $WEBPACK_ERROR_LOG for details."
  cat "$WEBPACK_ERROR_LOG"
  exit 1
else
  echo "✅Webpack build completed."
fi