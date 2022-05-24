# build stage
FROM node:lts-alpine as build-stage
COPY package*.json ./
RUN npm install
COPY docs/ docs/
RUN cd docs/ && npm run docs:build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /docs/.vuepress/dist /usr/share/nginx/html
COPY assets/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]