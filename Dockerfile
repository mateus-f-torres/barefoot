FROM node:12.18.4

WORKDIR /usr/src/barefoot

EXPOSE 8080

COPY . .

RUN yarn install --immutable

VOLUME /usr/src/barefoot/.yarn

CMD ["yarn", "start", "--host", "0.0.0.0"]
