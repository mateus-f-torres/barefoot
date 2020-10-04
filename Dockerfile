FROM node:12.18.4 AS build

WORKDIR /usr/src/barefoot
COPY . /usr/src/barefoot

RUN yarn install --immutable

RUN yarn build

FROM nginx
COPY --from=build /usr/src/barefoot/dist /usr/share/nginx/html
