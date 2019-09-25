/**
 * Mise en place de notre serveur
 * NodeJS grâce au Framework Express.
 * @type {createApplication}
 */
const express = require('express');

/**
 * Création du serveur express.
 */
const app = express();
const port=3000;

/**
 * Importer le package 'nunjucks'
 * Configuration avec Express
 *https://mozilla.github.io/nunjuncks/getting-started.html
 * /
const nunjucks= require('nunjucks');

/**
 *Les objets 'req' (requete) et 'res' (réponse)
 * sont exactement les mêmes que ceux fournit par Node.
 */
app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/views/html/index.html');
});

app.get('/contacts', (req, res) => {
    res.sendFile(__dirname+ '/views/html/contacts.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname+ '/views/html/contact.html');
});


/**
 * La formule qui suit permet de démarrer l'écoute des connexions sur le port 3000
 */
app.listen(3000, () => {
    console.log('App listening on port http://localhost: ${port}!')
});





