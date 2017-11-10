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
