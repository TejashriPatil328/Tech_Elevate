FROM node:22

# Install Python and Java
RUN apt-get update && \
    apt-get install -y python3 openjdk-17-jdk && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]