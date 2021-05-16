find docs/* -type f -name "*.html" | while read INPUT_FILE; do
    echo "Minifying $INPUT_FILE"
    html-minifier --collapse-whitespace --remove-comments \
    --remove-optional-tags --remove-redundant-attributes \
    --remove-script-type-attributes --remove-tag-whitespace \
    --minify-css true --minify-js true \
    $INPUT_FILE -o $INPUT_FILE
done

