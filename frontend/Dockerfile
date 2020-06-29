FROM node:14.4
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --silent
RUN npm install
COPY . .
CMD npm run dev