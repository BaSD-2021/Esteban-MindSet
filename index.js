const express = require('express');
const postulants = require('./controllers/postulants.js')
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('La Bestia does the best readmes ever');
})

app.get('/postulants', postulants.getPostulants)
app.get('/postulants/create/', postulants.createPostulant)
app.get('/postulants/delete/', postulants.deletePostulant)
//app.get('/postulants/update/', postulants.updatePostulant)

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`))