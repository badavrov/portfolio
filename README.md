# Portfolio

## Introduction
This is a simple full stack [React](https://reactjs.org/) application with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) backend. Client side code is written in React and the backend API is written using Express. This application is configured with [Airbnb's ESLint rules](https://github.com/airbnb/javascript) and formatted through [prettier](https://prettier.io/)

### Development mode
In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode
In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

## Quick Start
**Contact form needs api-key https://sendgrid.com/ it is hiden in .env**

```bash
# Clone the repository
git clone https://github.com/badavrov/portfolio

# Go inside the directory
cd portfolio

# Install dependencies
yarn (or npm install)

# Start development server
yarn dev (or npm run dev)

# Build for production
yarn build (or npm run build)

# Start production server
yarn start (or npm start)
```

## Documentation

### Folder Structure
All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.

### Babel
[Babel](https://babeljs.io/) helps us to write code in the latest version of JavaScript. If an environment does not support certain features natively, Babel will help us to compile those features down to a supported version. It also helps us to convert JSX to Javascript.

### ESLint
[ESLint](https://eslint.org/) is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

### Webpack
[Webpack](https://webpack.js.org/) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

### Nodemon
Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server. This is used in development only.

### Express
Express is a web application framework for Node.js. It is used to build our backend API's.
src/server/index.js is the entry point to the server application. Below is the src/server/index.js file

### Concurrently
[Concurrently](https://github.com/kimmobrunfeldt/concurrently) is used to run multiple commands concurrently. I am using it to run the webpack dev server and the backend node server concurrently in the development environment. Below are the npm/yarn script commands used.

```javascript
"client": "webpack-dev-server --mode development --devtool inline-source-map --hot",
"server": "nodemon src/server/index.js",
"dev": "concurrently \"npm run server\" \"npm run client\""
```

### VSCode + ESLint + Prettier
[VSCode](https://code.visualstudio.com/) is a lightweight but powerful source code editor. [ESLint](https://eslint.org/) takes care of the code-quality. [Prettier](https://prettier.io/) takes care of all the formatting.
