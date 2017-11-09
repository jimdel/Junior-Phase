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
- We use pg in node as a database driver so our Javascript can talk to the databse using postgres's TCP/IP protocol
