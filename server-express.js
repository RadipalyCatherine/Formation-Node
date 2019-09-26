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
 *  Importer le package 'nunjucks'
 * Configuration avec Express
 *https://mozilla.github.io/nunjuncks/getting-started.html
 * /

 const nunjucks = require( 'nunjucks');


 /**
 *Importer le package 'lowdb'
 * https://www.npmjs.com/package/lowdb
 * *------------------------------------------
 * Il nous permettra de stocker et manipuler
 * des données dans un fichier au format JSON.
 * /
 * @type {{lib, precompile, Loader, runtime, installJinjaCompat, configure, lexer, Template, NodeResolveLoader, renderString, WebLoader, FileSystemLoader, nodes, parser, compile, PrecompiledLoader, Environment, reset, precompileString, compiler, render}|*}
 */

 const low = require('lowdb');
 const FileSync = require('lowdb/adapters/FileSync');

 const adapter = new FileSync('db.json');
 const db = low(adapter);

/**
 * Pour récupérer les données POST, nous avons besoin
 * de la llibrairie 'body-parser". Elle nous permettra
 * de manipuler les données 'POST' de la requête.
 */
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 *Les objets 'req' (requete) et 'res' (réponse)
 * sont exactement les mêmes que ceux fournit par Node.
 */
app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/views/html/index.html');
    res.redirect('/contacts');
});

app.get('/ajouter-un-contact', (req, res)=>{
    res.redirect('/contact')
})

app.get('/ajouter-un-contact', (req, res)=>{
    res.render('html/ajouter-un-contact.html');
});

app.post('/ajouter-un-contact', (req, res)=> {
    /**
     *lors de la soumission du formulaire avec
     * la méthode POST, c'est cette fonction qui
     * sera exécutée.
     */
    //console.log(reg.body);
    const contact = req.body;

    // On ajoute le nouveau contact dans notre fichier JSON
    db.get('contacts')
        .push(contact)
        .write();

    // On redirige l'utilisateur sur les contacts
    res.redirect('/contacts');
});

//--Récupérer la liste des contacts
const contacts=db.get('contact').value();

app.get('/contact', (req, res)=>{
//res.sendFiler(_dirname + '/views/html/contact.html');
res.render('html/contacts.html');
});

/**
 * *Démarrer l'écoute des connexions sur le port 3000
 */

app.get('/contact', (req, res) => {

    //-- Récupérer la liste des contacts
    const contactsDb = db.get('contacts').value();

    // res.sendFile(__dirname + '/views/html/contacts.html');
    res.sendFile(__dirname+ '/views/html/contact.html');

});




/**
 * La formule qui suit permet de démarrer l'écoute des connexions sur le port 3000
 */
app.listen(3000, () => {
    console.log('App listening on port http://localhost: ${port}!')
});








