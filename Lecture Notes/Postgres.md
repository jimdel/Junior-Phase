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
