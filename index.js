const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

const port = 3000;





app.get('/', function (req,res) {
    res.status(200).send({resCode:1})
});

app.get('/test', function (req,res) {
    res.status(200).send({resCode:1,msg:'Hello world'})
});

app.get('/test2', function (req,res) {
    res.status(200).send({resCode:1,msg:'Hello world 6'})
});




app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})