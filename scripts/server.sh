#!/bin/bash
# test if the following command returns a container id
docker_id="$(docker ps --quiet --filter name=barefoot)"

# run only if already present
if test -n "$docker_id"; then
  docker stop barefoot
  docker rm barefoot
fi

# build a clean new image
docker build --tag barefoot .

# run image, serving our project on a ngx server mapped to port 8080
docker run --name barefoot --detach --publish 8080:80 barefoot
