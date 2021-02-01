
const express = require('express');
const cors = require('cors');
const loginAgenda = require('./loginAgenda');
const app = express();
const PORT = 3333;

app.use(cors({}));//libera o acesso ao backend pra qlq 1

app.use(express.json());

app.post('/agenda', loginAgenda.login);

app.get('/', (req, res) => {
    console.log('Bateu!')
    res.json({ok:true})
});

//const routes = require('./routes');
//app.use(routes)
app.listen(PORT, function(err){ 
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port", PORT); 
})