find _site/* -type f -name "*.html" | while IFS= read -r INPUT_FILE; do
    html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true $INPUT_FILE > $INPUT_FILE
done

