import express from "express";
import path from 'path';
import hbs from 'hbs';

const app = express();
const port = process.env.PORT || 3000;

//       ******      Dynamic Path      ******

// 1. Use handlebars as a template engine
app.set('view engine', 'hbs');


const __dirname =  path.resolve();

// 2. Changing Views to templatePath
const templatePath = path.join(__dirname, "../templates/views");
app.set('views', templatePath);


// 3.  Registering partials
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);


// 4. Serve static files from the 'css' and 'images' directory
app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.use('/images', express.static(path.join(__dirname, '../public/images')));


// 5. routing
app.get("/", (req, res)=>{
    res.render("index");
})


app.get("/weather", (req, res)=>{
    res.render("weather");
})


app.get("/about", (req, res)=>{
    res.render("about");
})


app.get("*", (req, res)=>{
    res.render("404error", {
        errorMsg : 'Oops! Page Not Found.'
    });
})


app.listen(port, ()=>{
    console.log("Listening!")
})