#!/bin/bash
npx @openapitools/openapi-generator-cli generate -g openapi \
-i ./index.js \
-o ./openapi-spec.yml \
--additional-properties=useTags=true \
--skip-validate-spec
#!/bin/bash

# Install required dependenciesnpm install -g @openapitools/openapi-generator-cli

# Define the input directories for the API code
#!/bin/bash
npx @openapitools/openapi-generator-cli generate -g openapi \
-i ./index.js \
-o ./openapi-spec.yml \
--additional-properties=useTags=true \
--skip-validate-spec
models_dir="./models"
routes_dir="./routes"
controllers_dir="./controllers"

# Define the output directory for the OpenAPI specification file
output_dir="./openapi"

# Create the output directory if it doesn't exist
mkdir -p $output_dir

# Generate the OpenAPI specification file using the OpenAPI Generator CLI
npx @openapitools/openapi-generator-cli generate \
  -g openapi \
  -i $models_dir \
  -i $routes_dir \
  -i $controllers_dir \
  -o $output_dir/openapi-spec.yml
