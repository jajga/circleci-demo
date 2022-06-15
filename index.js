const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

const port = 3000;

function welcomeMessage(){
    var message = "Welcome to CI/CD 101 using CircleCI!";
    return message;
}

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

module.exports.welcomeMessage = welcomeMessage;