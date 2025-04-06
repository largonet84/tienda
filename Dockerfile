FROM node:22.14.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli 

RUN ng add @ng-bootstrap/ng-bootstrap

COPY . .

RUN ng build --configuration=production

FROM nginx:latest

COPY --from=build app/dist/tienda /usr/share/nginx/html

EXPOSE 80