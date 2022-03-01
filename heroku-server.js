const express = require('express');
const path = require('path');

const app = express();

/* Esto lo metimos por una recomendación de SonarCloud */
app.disable('x-powered-by');

app.use(express.static('./dist/myApp'));

app.get('/*', (req, res) => res.sendFile('index.html', { root: 'dist/myApp' }));

app.listen(process.env.PORT || 8080);
