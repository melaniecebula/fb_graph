//express is used to serve html pages.  It's basically a fancy html (it can dynamically change things on the page- for example, instead of 'Hello!' you can have a page say 'Hello <user.name>!'
var express = require('express');
var app = express();

//This isn't something to remember.  Your just re-use it for every project.  It expects to have a directory with the name /views, and a directory with the name /static
app.configure(function() {
    app.use(express.compress());
    app.set("views", __dirname + "/views");
    app.set("view engine", "ejs");
    app.use(express["static"] (__dirname + "/static"));
    app.use(app.router);
});

//This says that on "/" node will server up (res.render) a file called index.ejs (which we've supplied in the /views directory)
//  "/"  Is the homepage.  But you can have other pages (For example, clicking a button can res.redirect to a registration page, or navigating directly to localhost:80/registration could load the same page (app.get("/registrastion", ....)
app.get("/", function(req,res) {
    console.log("hello world");
    res.render("index.ejs");
});

//this tells the server to start
app.listen(3000);
console.log("listening on port 80");
