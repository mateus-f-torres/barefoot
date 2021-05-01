#!/bin/bash
image_name="$(test -n "$1" && echo "$1" || echo "barefoot")"
local_port="$(test -n "$2" && echo "$2" || echo "8080")"

# safeguard that developer has docker installed
if ! command -v docker &> /dev/null; then
  echo "ERROR: docker is required but it's not installed."
  exit 1
fi

# get container id, if present
docker_id="$(docker ps --quiet --filter name="$image_name")"

# remove old image, if present
if test -n "$docker_id"; then
  docker stop "$image_name" && docker rm "$image_name"
fi

# build a new image
docker build --tag "$image_name" .

# run image, mapping our local port to nginx port 80
docker run --name "$image_name" --detach --publish "$local_port":80 "$image_name"
