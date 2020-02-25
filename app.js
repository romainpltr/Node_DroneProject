// require modules
let less = require('less');
let http = require('http');
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser')

let app = express()

// Moteur de template

app.set('view engine', 'ejs')

// Middleware
app.use('/assets', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes

app.get('/', function(req, res) {
    res.render('pages/index')
});


app.post('/', (req, res) => {


    if (req.body.insname == "" && req.body.insname2 == "") {
        res.render('pages/index', { errorins: 'Un des champs est manquant, veuillez réessayer...' })
    } else {
        if (req.body.insemail != req.body.insemail2) {
            res.render('pages/index', { errorins: 'Vos adresses email sont différentes, veuillez réessayer...' })
        } else {
            if (req.body.password < 4) {
                res.render('pages/index', { errorins: 'Il vous faut un minimum de 4 caractères à votre mot de passe...' })
            } else {
                if (req.body.password != req.body.passwordverif) {
                    res.render('pages/index', { errorins: 'Vos mots de passe sont différents, veuillez réessayer...' })
                } else {
                    // Ajout dans la bdd => MongoDB
                    // https://zestedesavoir.com/tutoriels/312/debuter-avec-mongodb-pour-node-js/
                }
            }
        }
    }

})





// Demarrage du serveur

app.listen(8080);
console.log("Server has been started");