FROM node:16.13.0-alpine AS build

WORKDIR /usr/src/app
COPY . /usr/src/app

# NOTE: image-webpack-loader needs the following line to work
RUN apk add --no-cache autoconf automake file g++ libtool make nasm libpng-dev
RUN yarn install --immutable
RUN yarn build

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
