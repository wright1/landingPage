const express = require ('express');
const exphbs = require ('express-handlebars');
const port = 3000;

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.send('Hello World!!!'));
app.listen(port, () => console.log(`We have lift off, landingPage is listening at port ${port}`));