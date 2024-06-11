#!/bin/bash

# Set your Docker Hub username and desired tag
DOCKER_HUB_USERNAME="pramithamj"
TAG="v1.0.2"

# Log in to Docker Hub
echo "Logging in to Docker Hub..."
docker login || { echo "Docker login failed"; exit 1; }

# Build the Docker images using docker-compose
echo "Building Docker images..."
docker-compose build || { echo "Docker build failed"; exit 1; }

# Get the image IDs for backend and frontend
BACKEND_IMAGE_ID=$(docker images -q backend)
FRONTEND_IMAGE_ID=$(docker images -q frontend)

# Check if the image IDs were retrieved successfully
if [ -z "$BACKEND_IMAGE_ID" ]; then
  echo "Failed to retrieve backend image ID"
  exit 1
fi

if [ -z "$FRONTEND_IMAGE_ID" ]; then
  echo "Failed to retrieve frontend image ID"
  exit 1
fi

# Tag the images
echo "Tagging images..."
docker tag $BACKEND_IMAGE_ID $DOCKER_HUB_USERNAME/backend:$TAG || { echo "Failed to tag backend image"; exit 1; }
docker tag $FRONTEND_IMAGE_ID $DOCKER_HUB_USERNAME/frontend:$TAG || { echo "Failed to tag frontend image"; exit 1; }

# Push the images to Docker Hub
echo "Pushing backend image to Docker Hub..."
docker push $DOCKER_HUB_USERNAME/backend:$TAG || { echo "Failed to push backend image"; exit 1; }

echo "Pushing frontend image to Docker Hub..."
docker push $DOCKER_HUB_USERNAME/frontend:$TAG || { echo "Failed to push frontend image"; exit 1; }

echo "Docker images successfully pushed to Docker Hub with tag $TAG"
