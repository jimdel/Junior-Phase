# Promises Review
## Introduction
- Promises are used to 'beauitfy' asynchronous callbacks
- Promises replace typical callback syntax to avoid creating a pyramid of doom
```javascript
  const pg = require('pg');

  //Single Promise
  pg.query('select * from animals')
    .then(data => console.log(data))

  //To chain mutliple promises
   pg.query('select * from animals')
    .then(data => {
      console.log(data)
      return pg.query('select * from posion')
      //We must return a promise to link .thens together
    })
    .then();
    //This will catch all errors if they exist in the promise change
    .catch(err => console.log(err))
```
## Advanced Promise Methods
_Use bluebird npm module for advanced promise features_

- Promise.all takes in many promises (in an array) and returns one promise that is a collection of all the completed promises from the array and then uses the .then function chained to it
  - Promise.each is not a part of the official promise specs
    - It belongs to bluebird
  - It will return the values in order
  - Syntax:
```javascript
        const p1 = pg.query("SELECT * FROM animals")
        const p2 = pg.query("SELECT * FROM trees")

        Promise.all([p1, p2])
          .then(data => console.log(data))
```
- Promise.each is very similar to Promise.all but will return the values in no particular order
  - Promise.each is not a part of the official promise specs
  - It belongs to bluebird
  - Syntax:
```javascript
        const p1 = pg.query("SELECT * FROM animals")
        const p2 = pg.query("SELECT * FROM trees")

        Promise.each([p1, p2])
          .then(data => console.log(data))
```
