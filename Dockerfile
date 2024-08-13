FROM node:18.18.0 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# React app for production
RUN npm run build

# Use nginx to serve the static files
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
