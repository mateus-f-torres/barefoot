FROM node:12.20.0-alpine AS build

WORKDIR /usr/src/barefoot
COPY . /usr/src/barefoot

ENV HUSKY_SKIP_INSTALL=true

RUN yarn install --immutable
RUN yarn build

FROM nginx:alpine
COPY --from=build /usr/src/barefoot/dist /usr/share/nginx/html
