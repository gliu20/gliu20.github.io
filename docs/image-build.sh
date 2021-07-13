cd assets/images
find * -type f -exec convert {} -resize 10000@\> xs/{} \; \
-exec convert {} -resize 100000@\> sm/{} \; \
-exec convert {} -resize 500000@\> md/{} \; \
-exec convert {} -resize 1500000@\> lg/{} \; \
-exec convert {} -resize 5000000@\> xl/{} \;
cd ../../assets/puns
find * -type f -exec convert {} -resize 10000@\> xs/{} \; \
-exec convert {} -resize 100000@\> sm/{} \; \
-exec convert {} -resize 500000@\> md/{} \; \
-exec convert {} -resize 1500000@\> lg/{} \; \
-exec convert {} -resize 5000000@\> xl/{} \;