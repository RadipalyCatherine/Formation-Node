/**
 * Importer le module HTTP.
 * ------------------------------------
 * Toutes les fonctions du module HTTP
 * sont maintenant disponible dans notre
 * constante 'http'.
 * ------------------------------------
 * Permet de gérer les opérations HTTP.
 * @type {module:http}
 */
const http = require('http');

/**
 * Déclarer notre hôte (Url du serveur web)
 * et son port (Port HTTP).
 */
const hostname = '127.0.0.1';
const port = 3000;

const url = require('url');
/**
 * *Importe le mdule 'fs' qui
 * nous permettra d'accéder au
 * système de fichier.
 * @type {module:fs}
 */
const fs = require('fs');

/**
 * Création de notre serveur NodeJS
 * @type {Server}
 */
const server = http.createServer((req, res) => {

    let path = url.parse(req.url).pathname;
        console.log(path);

    if (path === '/') {

        //--Je demande à NodeJS de lire mon fichier HTML.
        fs.readFile( __dirname + '/views/html/index.html',(err, data )=>{
            /**
             * Le contenu de ma fonction ne sera exécuté  que lorsque
             * NodeJS aura fini la lecture de mon fichier.
             */

            // -- On envoi un code statut HTTP.
            res.statusCode = 200;
            // -- On ajoute a notre réponse une en-tête HTTP de type texte.
            res.setHeader('content-type', 'text/html; charset=utf-8');
            res.end(data)
        });

    } else if ( path === '/contacts' ) {



    }else if (path === '/contact') {

        let params = url.parse(reg.url, true).query;
        let prenom=params.prenom;
        let nom= params.nom;

        res.statusCode =200;
        res.setHeader( 'content-type', 'text/html; charset=utf-8');
        res.end('<html><body><h1>Mon Contact :${prenom} ${nom}</h1></body></html>');

        // Pour tester: http://localhost:3000/contact?prenom=Catherine&nom=RADIPALY

    } else {
        res.statusCode = 404;
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.end(`<html><body><h1>Erreur 404 !</h1></body></html>`);
    }


});// Fin du http.

/**
 * Démarrage du serveur et écoute
 * des connexion sur le port 3000.
 */
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(`Press CTRL-C to stop.\n`);
});

}else if (path === '/contacts') {

    fs.readFile(path
:
    __dirname + '/views/html/contacts.html',
        callback
:
    (err, data) => {

        if (err) console.log(err);
        res.statusCode = 200;
        res.setHeader(name
    :
        'content-type', value
    :
        'text/html; charset= utf-8'
    )
        ;
        res.end(data);

    }
)
    ; // Fin de fs.readFile

}else if (path === '/contact') {

    let params = url.parse(reg.url, parseQueryString: true).query;
    let prenom = params.prenom || 'Anonyme';
    let nom = params.nom || '';

}
