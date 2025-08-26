# Étape 1 : Build de l'application Angular
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli \
    && npm install

COPY . .

RUN npm run build -- --configuration production

# Étape 2 : Servir avec Nginx
FROM nginx:alpine

COPY --from=build /app/dist/m1iage /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
