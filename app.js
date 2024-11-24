const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
// Use ejs-mate for layouts
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);

// Define routes
app.get('/', (req, res) => {
    res.render("./landingPages/index.ejs"); // Render index.ejs
});

app.get("/harborview", (req, res) => {
    res.render('./landingPages/harborview.ejs');  // This will render 'views/project.ejs'
});
app.get("/nordiac", (req, res) => {
    res.render('./landingPages/nordiac.ejs');  // This will render 'views/project.ejs'
});
app.get("/greenCity", (req, res) => {
    res.render('./landingPages/greenCity.ejs');  // This will render 'views/project.ejs'
});
app.get("/newCulture", (req, res) => {
    res.render('./landingPages/newCulture.ejs');  // This will render 'views/project.ejs'
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});