FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 
COPY . .

RUN npm run build --verbose

EXPOSE 3000

CMD ["npm", "start"]
# CMD ["npm", "run", "dev"]

 
