//o express é um micro framework para ajudar a ter definição de rotas
const express = require('express'); //utilizo require para importar uma dependência externa.
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

//o que fazer com o express para começar a visualizar as coisas que são criadas ?
const app = express(); //crio a aplicação

//conexão com o banco de dados omnistack:omnistack => usuário:senha
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-hugxx.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//o que fazer para começar a visualizar a aplicação funcionando?
app.use(cors());
app.use(express.json()); //manda o express utilizar formato json
app.use('/files', express.static(path.resolve(__dirname, '../uploads')));
app.use(routes);

app.listen(3333); //porta da aplicação
