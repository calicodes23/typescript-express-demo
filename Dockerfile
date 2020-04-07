FROM node:12.13-alpine

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .

# Install all Packages
RUN yarn install --production=true

# Copy all other source code to work directory
ADD . /usr/src/app

# transpile
RUN yarn tsc

# Start
CMD [ "yarn","start:prod" ]

EXPOSE 3000
