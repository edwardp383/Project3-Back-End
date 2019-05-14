const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const session        = require('express-session');
const cors           = require('cors');
const bcrypt 		 = require('bcryptjs');
require('./db/db.js');



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionsSuccessStatus:200
}

app.use(session({
  secret: 'a3jkal12l3!lkj%soin',
  resave: false, 
  saveUninitialized: false 
}))


app.use(cors(corsOptions));


const userController  = require('./controllers/users');
const animeController = require('./controllers/anime');


app.use('/users', userController);
app.use('/api/v1/anime', animeController)


app.listen(3000, () => {
  console.log('listening... on port: ', 3000);
});