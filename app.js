const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is running at web");
});

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
  res.sendFile("public/index.html", {
    root: __dirname,
  });
});

var mangaRoute = require("./routers/mangasRouter");
app.use("/mangas", mangaRoute);