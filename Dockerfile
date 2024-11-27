FROM node:20
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY . .
RUN corepack enable
RUN yarn install --immutable
ENTRYPOINT [ "yarn", "start" ]