FROM node:20
COPY . .
RUN corepack enable
RUN yarn install --frozen-lockfile
ENTRYPOINT [ "yarn", "start" ]