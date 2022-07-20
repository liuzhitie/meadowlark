const express = require('express');
const expressHandlebars = require('express-handlebars');
const handler = require('./lib/handlers');
const app = express();
const port = process.env.PORT || 3000


// configure Handlebars view engine
app.engine('handlebars', expressHandlebars.engine({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', handler.home);
app.get('/about', handler.about);

// custom 404 page
app.use(handler.notFound);
// custom 500 page
app.use(handler.serverError);

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))
