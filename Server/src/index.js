const http = require("http")
const getCharById = require("./controllers/getChatById")


const PORT = 3001

http.createServer((req, res) => {
    console.log('El puerto se encuentra abierto')
    const { url } = req;

    res.setHeader('Access-Control-Allow-Origin', '*');

    // ! RUTA
    if (url.includes('/rickandmorty/character')) {
        let urlId = url.split("/").pop();
       
    //! CONTROLLER
        getCharById(res, urlId)

        
        }
}).listen(PORT, 'localhost')

