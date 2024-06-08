# Use the official Node.js image as a base image
FROM node:18

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
