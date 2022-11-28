FROM node:14

WORKDIR /app

COPY package.json package-lock.json ./

# RUN npm uninstall -g phantomjs

# RUN npm install phantomjs

# RUN rm -rf /app/node_modules/node-sass

# install prod 
RUN npm install --production

# RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build
CMD npm start