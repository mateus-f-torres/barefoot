#!/bin/bash
docker_name="barefoot"

# test if the following command returns a container id
docker_id="$(docker ps --quiet --filter name=$docker_name)"

# run only if already present
if test -n "$docker_id"; then
  docker stop $docker_name
  docker rm $docker_name
fi

# build a clean new image
docker build --tag $docker_name .

# run image, serving our project on a ngx server mapped to port 8080
docker run --name $docker_name --detach --publish 8080:80 $docker_name
