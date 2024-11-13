# Use a specific Node.js version and a smaller image (e.g., Alpine)
FROM node:18-alpine

# Install the latest npm globally
RUN npm install -g npm@latest

# Set the working directory
WORKDIR /src

# Copy only package.json to install dependencies first
COPY package.json .

# Install dependencies (production-only, silent mode for minimal logs)
RUN npm install --only=production --silent

# Copy the remaining application files to /src
COPY . /src

# Use JSON array syntax for CMD to handle signals correctly
CMD ["npm", "start"]
