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
    res.status(200).send('Hello World!')
});

app.get('/test', function (req,res) {
    res.status(200).send({resCode:1,msg:'Hello world 2'})
});

app.get('/test2', function (req,res) {
    res.status(200).send({resCode:1,msg:'Hello world 8'})
});




app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})

module.exports.welcomeMessage = welcomeMessage;