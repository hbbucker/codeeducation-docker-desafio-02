FROM nginx:1.22-alpine

RUN apk add --no-cache openssl

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.node.conf /etc/nginx/conf.d

RUN mkdir /var/www/html -p && touch /var/www/html/index.html

EXPOSE 80
