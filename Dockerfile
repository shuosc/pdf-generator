FROM node:12.6.0-alpine
COPY ./fonts ./fonts
COPY ./package.json ./package.json
COPY ./src/index.js ./index.js
RUN npm install --production
CMD ["node","./index.js"]
EXPOSE 3000
