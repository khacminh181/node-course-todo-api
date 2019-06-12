var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

const { ObjectID } = require('mongodb');

var app = express();
const port = "https://glacial-falls-69483.herokuapp.com" || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    })
})

//GET /todos/12345
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // Valid id using is valid
    // 404 - send back empty send
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // findById
    // success
    // if todo - send it back
    // if no todo - send back 404 with body
    // error
    // 400 - and send empty body back
    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.status(404).send()
        }
        res.send(todo);
    }).catch((e) => {
        res.status(400).send(e);
    })

})

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
})

module.exports = { app };

