FROM node:10
WORKDIR /usr/src/app
ARG APP_PATH
ARG PORT

# TODO: Fix path from env file
ENV APP_PATH ${APP_PATH:-"./build/app.js"}
ENV PORT ${PORT:-8000}


COPY . ./
RUN npm install pm2 -g
RUN npm ci --only=production

COPY build ./build

EXPOSE ${PORT}

# WITHOUT PM2
# CMD [ "node", APP_PATH ]
# PM2
CMD [ "pm2-runtime", "./build/app.js" ]

