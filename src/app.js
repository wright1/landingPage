const express = require ('express');
const exphbs = require ('express-handlebars');
const path = require ('path');
const port = 3000;

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, "views", "layouts"),
}));

app.use(express.static(path.join(__dirname, "..", "public")));

app.get('/', (req, res) => res.render('home'));
app.listen(port, () => console.log(`We have lift off, landingPage is listening at port ${port}`));