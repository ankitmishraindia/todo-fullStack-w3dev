# Dockerfile for Express Backend
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build TypeScript source
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
