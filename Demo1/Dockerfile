FROM node:14.11.0-stretch
WORKDIR /usr/src
COPY package*.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]
EXPOSE 3000