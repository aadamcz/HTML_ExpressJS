var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/store", function(req, res, next) {
	console.log("Hej, jestem pośrednikiem przy żądaniu /store");
	next();
});

app.get("/", function(req, res) {
	res.send("Hello world");
});

app.get("/store", function(req, res) {
	res.send("To jest sklep");
});

app.get("/first-template", function(req, res) {
	res.render("first-template");
});

app.get("/loginPage", function(req, res) {
	res.render("loginPage");
});

app.get("/loggedPage", function(req, res) {
	res.render("loggedPage");
});

app.listen(3000);
app.use(function(req, res, next) {
	res.status(404).send("Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!");
});
