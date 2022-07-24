FROM node:16-alpine as build

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

#NGINX Web Server
#FROM nginx:1.23.0-alpine as dev

#COPY --from=build /code/build /usr/share/nginx/html

#EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]

FROM nginx:1.23.0-alpine

COPY --from=build /code/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'