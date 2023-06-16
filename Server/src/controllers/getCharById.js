// ! CON EXPRESS
const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';
// const getCharById = (req, res) => {
//     const { id } = req.params;
//     axios.get(URL + id)
//     .then(response=>{
//         try {
//             const {id, name, image, gender, species,origin, status} = response.data;
//             res.status(200).json({id, name, image, gender, species,origin, status})
//         } catch (error) {
//             res.status(404).send('Not Found')
//         }
        
//     }).catch((error)=>{
//         res.status(500).send(error.message)
//     })
// };

async function getCharById (req, res) {
    const { id } = req.paramas;
    await axios.get(URL + id)
}

module.exports = getCharById;


// ! SIN EXPRESS    
// const axios = require('axios')
// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response=>{
//         const {id, name, image, gender, species,origin, status} = response.data;
//         res.writeHead(200, {"Content-Type":"application/json"});
//         res.end(JSON.stringify({id, name, image, gender, species,origin, status}))
//     }).catch((error)=>{
//         res.writeHead(500, {"Content-Type":"text/plain"});    
//         res.end(error.message)
//     })
// }


// module.exports = getCharById;