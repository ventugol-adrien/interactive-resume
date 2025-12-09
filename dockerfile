# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the project source code
COPY package*.json ./
COPY src ./src
COPY tsconfig.json ./
COPY vite.config.ts ./

# Build the application for production
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080
ENV HOST="0.0.0.0"

CMD ["nginx", "-g", "daemon off;"]