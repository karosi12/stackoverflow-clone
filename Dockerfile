FROM node:alpine
WORKDIR /usr/src/src/app
COPY package*.json .
RUN npm install
COPY . .
# CMD [ "npm", "start" ]
CMD [ "npm", "run", "dev" ]