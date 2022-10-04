const express = require("express");
const app = express();
const port = process.env.PORT || 4242;
app.use(express.json());

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Great ! It works.');
});

//connection base de donnée
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27042';
const dbName = 'mern-pool';



try {
    MongoClient.connect(url, function (err, client) {
        console.log("connection successfully");
        const db = client.db(dbName);
        client.close();
    })
}
catch (error) {
    console.log("faillure momo");
}


// //afficher le message de lancement plus le port utiliser
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});