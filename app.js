const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;

// Rutas
const mainRoute =require('./src/routes/main');
const disenosRoute =require('./src/routes/disenos');


app.use('/', mainRoute);
app.use('/disenos', disenosRoute);

//PUBLIC
app.use(express.static(path.join(__dirname, 'public')));

//EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
