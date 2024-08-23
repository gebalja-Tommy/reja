
console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
// const http = require("http");
const fs = require("fs");


// MongoDB chaqirish section===

const db = require("./server").db();


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});


// 1 kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2: Session code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs"); // backend ichida html front end yasaymiz


// 4 Routing Code
app.post("/create-item", (req, res) => {
    console.log(req);     // post bu DB-ga malumot olip keladi
    res.json({test: "success"});
});


app.get('/author', (req, res) => {
    res.render("author", {user: user});
});

app.get('/', function(req, res) {
    res.render("reja");  // get DB-dan malumotni olish va uqish uchun 
});


module.exports = app;
// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function(){
//     console.log(`The server is Running successfully on port: ${PORT}, http://localhost:${PORT}`);
// });


