const express = require("express");
const app = express();
// const hostname = 'localhost';
// const port = 6002;

// var path = require('path')
// res.sendFile(path.join(__dirname, '../public', 'index1.html'));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("request");
  next();
});

app.get("/", (req, res) => {
  // res.sendFile('index.html');
  res.sendFile("public/index.html", { root: __dirname });
});

var mangaRoute = require("./routers/mangasRouter");
app.use("/mangas", mangaRoute);
