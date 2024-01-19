# FlutterCart - E-commerce Application (Backend)

FlutterCart is an e-commerce application with a Flutter frontend and a Node.js backend powered by MongoDB. This project allows users to browse and purchase products in an online store.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Server](#running-the-server)
- [Contributing](#contributing)

## Prerequisites <a name="prerequisites"></a>

Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/cloud/atlas) account for cloud database

## Getting Started <a name="getting-started"></a>

### Installation <a name="installation"></a>

1. Clone the current repository:

   ```bash
   git clone https://github.com/Kaizoku01/Flutter_Cart-backend.git
   
2. Clone the frontend repository:
   
   ```bash
   git clone https://github.com/Kaizoku01/Flutter_Cart-frontend.git
   
3. Install dependencies:

   ```bash
   cd Flutter_Cart-backend
   npm install
   
### Configuration <a name="configuration"></a>

1. Create a `keys.js` file in the `src` directory to store your keys. This file should export the MongoDB and Razorpay keys as follows:

   ```javascript
   // src/keys.js
   
   module.exports = {
      RAZORPAY_ID,
      RAZORPAY_SECRET,
      MONGODB_URI
   };

### Running the Server <a name="running-the-server"></a>

1. For a one-time server start:

   ```bash
   npm start
2. For development with `nodemon`:

   ```bash
   npm run dev
The server should now be running at http://localhost:5000.

## Contributing <a name="contributing"></a>

We welcome contributions! Feel free to open issues or submit pull requests.
