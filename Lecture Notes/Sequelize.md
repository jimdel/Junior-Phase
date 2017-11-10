# Sequelize
## Introduction
- ORM
  - An object relational model written in Javascript that acts as a bridge in between your code and the DBMS
  - Enables us to use Javscript things instead of directly writing SQL statements
    - Behind the scenes it generates SQL
- Doesn't match up 100% so there may be instances when we will need to write SQL
- Sequelize is the one we shall be using
  - Has models and instances as opposed to tables and rows
    - Models are Tables
      - Constructor function literals are 'models' for future instances
    - Instances are the rows
      - Each instance is a row with properties/methods
# Usage
- Step 1: NPM install
- Step 2: Require and Instantiate Sequelize
```javascript
    const Sequelize = require('sequelize')
    //Connecting to the postgres db
    const db = Sequelize('postgres://localhost:5432/DBNAMEHERE')
```
- Match it with a table/creating a new table
```javascript
    //Defining a table
    //Table named user that has the columns name and pictureURL that are both STRING values
    const User = db.define('user';, {
      name: Sequelize.STRING,
      pictureUrl: Sequelize.STRING
    });

    //Connects to the db's table
    User.sync();
    //Since User.sync is asynchronous it will return a promise so we can do things with it
    User.sync()
    .then(
      const Jim = new User(
        name: "Jim"
      )
    )
```
- It is a good idea to create tables in the database application, then define and connect to them in the JS code using Sequelize
  - Probably not a good idea to create tables with JS
