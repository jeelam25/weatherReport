const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3004;

const staticPath = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);

// public static path
app.use(express.static(staticPath))



//routing
app.get("", (request, response) => {
    response.render('index')
})

app.get('/about', (request, response)=> {
    response.render('about')
})

app.get('/weather', (request, response)=> {
    response.render("weather")
})

app.get('*', (request, response)=> {
    response.render("404error", {
        errorMsg: 'Opps! Page Not Found'
    })
})

app.listen(port, () => {
    console.log(`server port working at ${port}`)
})