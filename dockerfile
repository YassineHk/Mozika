FROM nginx:1.15.2-alpine
COPY build /usr/share/nginx/html
EXPOSE 80