FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build 

EXPOSE 3000

CMD ["npm", "start"]
 