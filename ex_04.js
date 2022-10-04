const express = require("express");
const mongoose = require("mongoose");
// const Rooter = require("./routes");
const app = express();
const port = process.env.PORT || 4242;
app.use(express.json());



//connection base de donnée
mongoose.connect('mongodb://localhost:27042/amine',
{
    useNewUrlParser: true,
    // useFinderAndModify: false,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection failed."));
db.once("open",function (){
    console.log("Connection successfull.");
})

//route de base 
// app.get('/', (req, res) => {
//     res.set('Content-Type', 'text/html');
//     res.send('Great ! It works.');
// });


// //afficher le message de lancement plus le port utiliser
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});