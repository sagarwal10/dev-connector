const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport'); 

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();


// Body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 

//DB Config
const db = require('./config/keys').mongoURI;
console.log(db);
//Connect to MongoDB
mongoose
    .connect(db)
    .then(()=>console.log('MongoDB connected'))
    .catch(err=>console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config strategy - JWT
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server Running on port ${port}`));
