FROM node:20
COPY . .
RUN yarn install --frozen-lockfile
ENTRYPOINT [ "yarn", "start" ]