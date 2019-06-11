FROM node:latest

RUN mkdir -p /data
WORKDIR /data

# Bundle app source
COPY package.json /data
RUN npm install
COPY server.js /data
EXPOSE 8000
CMD ["node", "/data/server.js"]
