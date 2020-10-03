FROM node:12.18.4

WORKDIR /usr/src/barefoot
EXPOSE 8080

COPY . .

# --check-cache will fetch every pacakge to check if it matches cache
# not really good for a DEV Docker

# TODO: mount volume for built packages, better cache, before shutdown .yarn/unplugged files
RUN yarn install --immutable --immutable-cache

CMD ["yarn", "start", "--host", "0.0.0.0"]
