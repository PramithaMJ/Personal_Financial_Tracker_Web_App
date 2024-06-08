# Use the official Node.js image as a base image
FROM node:18

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Install a simple static server to serve the built application
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build"]
