#!/bin/bash

DOCKER_HUB_USERNAME="pramithamj"
TAG="v1.0.0"

# Log in to Docker Hub
docker login

# Build the images
docker-compose build

# Get image IDs
BACKEND_IMAGE_ID=$(docker images -q backend)
FRONTEND_IMAGE_ID=$(docker images -q frontend)

# Tag the images
docker tag $BACKEND_IMAGE_ID $DOCKER_HUB_USERNAME/backend:$TAG
docker tag $FRONTEND_IMAGE_ID $DOCKER_HUB_USERNAME/frontend:$TAG

# Push the images
docker push $DOCKER_HUB_USERNAME/backend:$TAG
docker push $DOCKER_HUB_USERNAME/frontend:$TAG

# To run shell Script
#chmod +x push_to_docker_hub.sh
#./push_to_docker_hub.sh
