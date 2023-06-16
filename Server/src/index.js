    const express = require('express')
    const server = express();
    const PORT  = 3001;
    const router = require('./routes/index')

    server.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header(
           'Access-Control-Allow-Headers',
           'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header(
           'Access-Control-Allow-Methods',
           'GET, POST, OPTIONS, PUT, DELETE'
        );
        next();
     });

     server.use(express.json());
     server.use("/rickandmorty", router)
 


server.listen(PORT, () => {
    console.log('El servidor esta levantado en el puerto:' + PORT);
})


// ! HTTP
    // const http = require("http")
    // const getCharById = require("./controllers/getCharById")


    // const PORT = 3001

    // http.createServer((req, res) => {
    //     console.log('El puerto se encuentra abierto')
    //     const { url } = req;

    //     res.setHeader('Access-Control-Allow-Origin', '*');

    //     // ! RUTA
    //     if (url.includes('/rickandmorty/character')) {
    //         let urlId = url.split("/").pop();
        
    //     //! CONTROLLER
    //         getCharById(res, urlId)

            
    //         }
    // }).listen(PORT, 'localhost')

