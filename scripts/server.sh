#!/bin/bash
image_name="barefoot"
local_port="$(test -n "$1" && echo "$1" || echo "8080")"

# get barefoot container id, if present
docker_id="$(docker ps --quiet --filter name=$image_name)"

# remove old barefoot image, if present
if test -n "$docker_id"; then
  docker stop $image_name && docker rm $image_name
fi

# build a new image
docker build --tag $image_name .

# run image, mapping our local port to nginx port 80
docker run --name $image_name --detach --publish "$local_port":80 $image_name
