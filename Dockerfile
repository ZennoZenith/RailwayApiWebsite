FROM node:20-alpine
WORKDIR /app
COPY . .
EXPOSE 4173
RUN npm install
RUN npm run build
CMD [ "npm", "run", "preview" ]