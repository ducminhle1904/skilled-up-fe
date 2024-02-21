# Build Stage
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm i vite -g
COPY . .
RUN npm run build

# Run Stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
