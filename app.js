require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')
const connectDB = require('./servers/config/db')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')

const app = express();

const port = 5000 || process.env.PORT;

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized:true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })
    // cookie:{maxAge: new Date(Date.now() + (3600000))}
    // Date.now() - 30 * 24 * 60 * 60 * 1000
}));


app.use(passport.initialize());
app.use(passport.session());


app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(methodOverride("_method"))

// Connect to Database
connectDB();

//Static Files

app.use(express.static('public'));


// Templatin Engine
app.use(expressEjsLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


//Routes
app.use('/', require('./servers/routes/auth'))
app.use('/', require('./servers/routes/index'))
app.use('/', require('./servers/routes/dashboard'))



// HANDLE 404
app.get('*', (req, res)=>{
    // res.status(404).send('404 Page Not Found!')
    res.status(404).render('404')
})

app.listen(port, ()=>{
    console.log(`App listning at port ${port}`);
})