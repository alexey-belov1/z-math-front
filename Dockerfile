FROM node:12.14.1 as frontend-build

WORKDIR /z-math/z-math-front

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:1.19.2-alpine

COPY --from=frontend-build /z-math/z-math-front/dist/z-math-front /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
