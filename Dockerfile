FROM node:19.9.0-alpine AS build

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN yarn install --immutable
RUN yarn build

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
