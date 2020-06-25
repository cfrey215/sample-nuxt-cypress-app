# sample-nuxt-app

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Configuring for Cypress Code Coverage
```bash
# add nyc and babel-plugin-istanbul as dev deps
yarn add -D nyc babel-plugin-istanbul

# create a .nycrc config file to configure the coverage

# modify the nuxt.config.js file to extend the webpack config to use the babel plugin (.babelrc is ignored by default in nuxt.)

# install the cypress code coverage package
yarn add -D @cypress/code-coverage

# add the following to cypress/support/index.js
import '@cypress/code-coverage/support'

# add the following to cypress/plugins/index.js
require('@cypress/code-coverage/task')(on, config)

return config
```

## Running Cypress tests and generating a code coverage report
```bash
# running just cypress tests
npm run cy:test

# running cypress and generating a coverage report
npm run test:report
```
