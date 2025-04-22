# node as base image
FROM node:20-alpine

WORKDIR /app

# Copy application code
COPY . .

RUN npm install

ENV API_URL="http://localhost:5000"

# Expose the port your app runs on
EXPOSE 5000

# Command to run the application
CMD ["yarn", "start"]
