const express = require('express');
const app = express();
// const hostname = 'localhost';
// const port = 6002;

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static('public'))

app.use((req, res, next) => {
    console.log("request");
    next();
});

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

var mangaRoute = require("./routers/mangasRouter");
app.use('/mangas', mangaRoute);

app.listen(port, hostname, () => {
    console.log(`Hello! I am running at ${hostname}:${port}/`);
});