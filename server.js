// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const app = express();
// const PORT = 8000;
// app.use(cors());
// app.get('/advancedsearch', async (req, res) => {
// const options = {
//     method: 'GET',
//     url: 'https://ott-details.p.rapidapi.com/advancedsearch',

//     headers: {
//         'X-RapidAPI-Key': '92856ad465mshdf45ccef91486bap1ccf0fjsn5341a376b04f',
//         'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
//     },
// };

// try {
//     const response = await axios.request(options);
//     res.json(response.data);
// } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
// }
// });

// app.get('/new-arrivals', async (req, res) => {
//     const options = {
//         method: 'GET',
//         url: 'https://ott-details.p.rapidapi.com/getnew',
//         params: {
//             region: 'IN',
//             page: '1'
//         },
//         headers: {
//             'X-RapidAPI-Key': '92856ad465mshdf45ccef91486bap1ccf0fjsn5341a376b04f',
//             'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await axios.request(options);
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error fetching advanced search results:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// // Add your other routes and middleware here

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// app.js
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const ottdetailController = require('./controller');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

app.get('/rapidapidetails', ottdetailController.getRapidApidetails);
// CRUD routes
app.post('/create', ottdetailController.createOTTDetail);
app.get('/getAll', ottdetailController.getAllOTTDetails);
app.get('/ottdetails/:id', ottdetailController.getOTTDetailById);
app.put('/update/:id', ottdetailController.updateOTTDetail);
app.delete('/delete/:id', ottdetailController.deleteOTTDetail);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
