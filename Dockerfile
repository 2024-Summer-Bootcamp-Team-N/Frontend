FROM node:20.10.0-alpine

WORKDIR /frontend

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV=production

CMD ["yarn", "dev", "--host"]
