FROM nginx:1.19

COPY nginx.conf /etc/nginx/nginx.conf

COPY default.conf /etc/nginx/conf.d/default.conf

COPY worker.conf /etc/nginx/conf.d/worker.conf

EXPOSE 80

EXPOSE 4000
