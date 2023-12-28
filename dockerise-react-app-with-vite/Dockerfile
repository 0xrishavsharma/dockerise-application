# Choose the proper node image from docker hub (https://hub.docker.com/_/node)
FROM node:18.3.0-alpine3.14 as BUILD_IMAGE
WORKDIR /app/react-app

# Copy package.json to docker image
COPY package.json .

# Install all dependencies using yarn
RUN yarn

# Copy all other remaining files from current directory to docker image
COPY . .

# Finally build our application
RUN yarn build

# Beginning of second stage
# Now, we will create our production image
# Here, we are using multi-stage build to reduce the size of our docker image. Also, it won't expose our code # in our container as we will only copy the build files from our previous(BUILD_IMAGE) image.
FROM node:18.3.0-alpine3.14 as PRODUCTION_IMAGE
WORKDIR /app/react-app

# Here, we are copying /app/react-app/dist folder from BUILD_IMAGE stage to PRODUCTION_IMAGE stage's 
# /app/react-app/dist folder
# But why copying to dist directory? Because, whenever Vite builds our application, it creates a dist folder 
# containing all build files. 
COPY --from=BUILD_IMAGE /app/react-app/dist /app/react-app/dist
EXPOSE 8080

# To run yarn commands like "yarn preview", we need to copy package.json and vite.config.ts file
COPY package.json .
COPY vite.config.ts .

# We also need to install typescript as the project is using typescript
RUN yarn add typescript

EXPOSE 8080 
CMD ["yarn", "preview"]