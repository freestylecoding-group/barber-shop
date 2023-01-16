//Se importa Express
import express from 'express';
// import session from 'express-session'

//Se crea una instancia de la Aplicacion
const APP = express();
// APP.use(session({
//         resave: true,
//         saveUninitialized: true,
//         secret: ''
// }))
import path, {dirname, join} from 'path';
import {fileURLToPath} from 'url';

//Se establece el puerto en el que se va a escuchar el servidor
const PORT = 5000;
//Se obtiene el directorio de donde se esta ejecutando este archivo
const __DIRNAME = dirname(fileURLToPath(import.meta.url));

//Se importa las rutas configuradas en otro archivo
import routes from './src/routes/routes.js';

//Se utilizan las rutas importadas en la aplicación
APP.use(routes);

//Se establece la carpeta 'public' como una carpeta estática, para poder acceder a los archivos contenidos en ella
APP.use(express.static(join(__DIRNAME, 'src/public')));

//Se establece el motor de vistas 'ejs' para la aplicación
APP.set('view engine', 'ejs');

//Se establece un middleware para controlar la cache en caso de que el usuario no esté autenticado
APP.use(function(req, res, next) {
        if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        next();
});

//Se escucha en el puerto establecido o en el puerto definido por el sistema
APP.listen(process.env.PORT || PORT, function(){
        console.log(`escuchando en el puerto: ${process.env.PORT || PORT}`)
});