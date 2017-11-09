# PostgreSQL Lecture
## Introduction
- Postgres is an open source DBMS
- Highly extensible
- Deep SQL standards compliance
- NoSQL object support
- Excellent transaction
  - ACID compliance
- Multi-user management/administration
## Under the Hood
- Postgres is a background process (a _daemon_)
- Gets sent queries and sends back data
- Postgres must always be listening for request queries on a port
  - Port 5432
- Communication is done via the TCP/IP protocol
## Node-postgres
- We use pg in node as a database driver so our Javascript can talk to the database directly using postgres's TCP/IP protocol
## Workshop Review
- To use postgres we must first import pg and configure it to connect to our database
  ```javascript
    const pg = require('pg');
    const postgresUrl = 'postgres://localhost/twitterdb';
    //Set the pg to connect to our database
    const client = new pg.Client(postgresUrl);

    //Runs a connection and will output an error if there is one when connecting
    client.connect(err => {
      if(err) {
        console.log('ERROR');
        console.error(err);
      }
    });

    module.exports = client;
  ```
- Then we have the ability to query the database for information:
- We need to wrap the query functionality in a GET request
```javascript
  router.get('/tweets', function(req, res, next){
    //When a user goes to /tweets URI
    client.query('SELECT * FROM tweets', function (err, result) {
    //We are going to query the db for all of the tweets
      if (err) return next (err); // If there is an error pass it to the middleware error checker
      var tweets = result.rows;
    //Use .rows pg property to save the results of the query into a variable
      res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true });
    //Use res.render & nunjucks to dynamically render the results of the query in html
    });
  });
```
