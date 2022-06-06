//configuração inicial
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();


//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

// rotas da api
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes);

//rota inicial / endpoint
app.get('/', (req, res) => {
    //res.send("Olá Mundo!");
    res.json({message: 'Oi Express!'});
})

// entregar uma porta
const dbUser = process.env.DB_USER;
const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);
const dbName = process.env.DB_NAME;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.shen7.mongodb.net/${dbName}?retryWrites=true&w=majority`)
.then(() => {
    app.listen(3000)
})
.catch((e) => console.log(e));

