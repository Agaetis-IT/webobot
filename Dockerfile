FROM node:10.7

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure `serve`.
RUN npm install -g serve yarn

# Copy all local files into the image.
COPY . .

# Install all dependencies of the current project.
RUN yarn install

ENTRYPOINT yarn build && serve -s -p 3000 build
EXPOSE 3000
