# Express and Sequelize Checkpoint Review
---
# Init Setup
- Make a folder
- Initialize it as in node
- ``` npm init -y ```
- Install required modules
  - Use: ``` npm install --save PACKAGE_NAME ```
    - express
    - morgan
    - pg@6 -> to avoid a weird error install v.6
    - sequelize
    - body-parser
    - nodemon
    - nunjucks
- Start script in package.json
  - ``` "start": "nodemon app.js" ```

# Setup app.js
- This is the main app file
```javascript
  //Require node modules for future use
  const express = require('express');
  const app = express();
  const nunjucks = require('nunjucks');
  //Nunjucks configuration: allows nunjucks to use the views directory to render content dynamically
  const env = nunjucks.configure('views', {noCache: true})
  app.use('html', nunjucks);
  const bodyParser = require('body-parser');
  //Body Parser configuration
  app.use(bodyParser.urlencoded({extended: false}))
  //Port Number to listen on
  const PORT = 3000;
  //Import models from models directory
  const Todo = require('./models').Todo;
  const Category = require('./models').Category;


  //Defualt Page Route
  app.get('/', (req, res) => {
    res.send("Hello");
  })

  //Example of implementing error handling into the routes
  app.get('/:id', (req, res) => {
    Todo.findbyId(req.params.id)
    .then(todo => {
      if(!todo) {
        const err = new Error('Detailed message about the error')
        next(err);
      } else {
        res.send("Hello");
      }
  })};

  //Example POST request
  app.post('/add',(req,res,next) => {
    //Use req.body.PROPNAME to access the desired property to save to the db
    Todo.create({
      title: req.body.title,
    })
    //.then we can say the creation was successful
    .then(res.send('Creation Successful'))
    //Need to continue the middleware chain using next if there is an error
    //This is because if an error occurs nothing will catch the error and
    //the application would hang
    .catch(next);
  })

  //Standard error handler middleware; this is the end of the next chain
  //If we want to be specific about where the error comes from we use the following
  //Always has four arguments

  app.use((err, req, res, next) => {
    //Sends the status of the error (if one exists) and a message
    if(err) {
      res.send('Error! ' + err);
    } else {
      //else send a standard message
      res.status(500).send('Error has occured')
    }
  })

  //The listener function, allows our server to wait for requests
  app.listen(PORT, () => {
    models.db.sync()
    .then(console.log(`Listening on ${PORT} ...`));
  })

```

# Setup Routes/index.js (if using a separate routes file)

- This allows you to create your routes in a separate file

```javascript

const express = require('express');
const router = express.Router();

module.exports = router;
```
- In this file, you can now create handlers on `router`.

- `put` and `delete` requests usually edit or delete data, and most likely you will not need to send content back to the client (unless the spec specifies something to send). If not sending anything, send status 204 to specify the request was success but no content needed to be sent back.

```javascript
// put request example. NOTE: Todos.complete was a method defined in another file (not built in!!)
router.put('/users/:name/tasks/:index', (req, res, next) => {
  Todos.complete(req.params.name, req.params.index);
  res.sendStatus(204);
})

// delete request example. NOTE: Todos.remove was a method defined in another file (not built in!!)
router.delete('/users/:name/tasks/:index', (req, res, next) => {
  Todos.remove(req.params.name, req.params.index);
  res.sendStatus(204);
})
```

# Setup Sequelize Models
- Create a directory called models
- Create an index.js file
- Create the database is Postgres
  - On the command line the command is: ``` createdb _NAME_HERE_ ```
- Setup:
```javascript
      //Require sequelize module from node and intialize it to db
      const Sequelize = require('sequelize');
      const db = new Sequelize('postgres://localhost:5432/__DATABASE_NAME_HERE__')

    //Model Definitions
      // The db.define function takes three arguements:
      // (table name, attributes(columns), options(getters/setters))
      const Category = ('category', {
        title: {
          name: Sequelize.STRING(),
          allowNull: false
        }
      });

      const Todos = ('todo', {
        task: {
          name: Sequelize.STRING(),
          allowNull: false;
        }
      })

      //Sets the association of the tables (foreign keys)
      Category.hasMany(Todos);
      Todo.belongsTo(Category);

      //Export models to be used in app.js
      module.exports {
        Category,
        Todos
      }
```
