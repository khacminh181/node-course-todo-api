const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5cdd3e1db5766cd82b88970d11';
var userID = '5cd81b50a9a664b008027228';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

    // Todo.find({
    //     _id: id
    // }).then((todos) => {
    //     console.log('Todo', todos);
    // })

    // Todo.findOne({
    //     _id: id
    // }).then((todo) => {
    //     console.log('Todo', todo);
    // });

    // Todo.findById(id).then((todo) => {
    //     if (!todo) {
    //         return console.log('Id not found');
    //     }
    //     console.log('Todo By Id', todo);
    // }).catch((e) => {
    //     console.log(e)
    // })

    User.findById(userID).then((user) => {
        if (!user) {
            return console.log('Unable to find user');
        }
        console.log(JSON.stringify(user, undefined, 2));
    }).catch((e) => {
        console.log(e)
    })