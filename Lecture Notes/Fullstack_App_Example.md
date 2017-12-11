# Designing a Fullstack Application

## Starting Point from Empty Folder

### First steps:

- Create npm
  - Use `npm init -y` to create a `package.json`
  - For node dependencies that allow others to npm install everything
  - For creating scripts (test, start, webpack, etc)
  - Describe the app
- Install Core Dependencies `npm install --save`:
  - express
  - sequelize
    - pg (database driver)
    - pg-hstore (Allows sequelize to work with extra pg features)
  - redux
  - react
    - or react-redux
  - react router
  - morgan/volleyball
  - body-parser
  - axios
- Install Developer Dependencies `npm install -D`:
  - webpack
  - nodemon
  - babel-core
  - babel-loader
  - babel-preset-env
  - babel-preet-react

## Folder Structure

- 2 applications will be running
  - One on the server side and one on the client side

- Server
  - `index.js` file
  - db directory
    - `index.js` for database
    -
- Public
  - `index.html` file
  - Any logos/images
- Client

- Server
  - Create an `index.js` file
    - Will be a list of improts from other files/folders/node_modules
    - Should look similar to what's below

``` javascript
      const express = require('express')
      const app = express();
      const volleyball = require('volleyball')
      const PORT = 3000
      const path = require('path')

      //Put middleware and route files here
      app.use(volleyball)

      //Says if there is anything in the public folder with routes and index.html
      app.use(express.static(path.join(__dirname, "../public")))

      //Create a test route to make sure we are ready to test routes
      app.get('/', (req, res) => {
        res.send('It works')
      })

      app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}...`)
      })
```

- Database `index.js`

```javascript
    const Sequelize = require('sequelize')
    const db = new Sequelize('postgres://localhost/DBNAME')
```

- Client

## Miscellaneous Notes

- Approach the project in slices not layers
- Create a start script for nodemon
- Think of express like a pipeline from top to bottom
- Avoid circular dependencies; split things up into many files if need be

## Questions to Ask/Research

- What exactly does express.static(...'../public') do?
