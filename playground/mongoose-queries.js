const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = "5a20f353d619b20522937f9811";

// if(!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log("Id not found");
//   }
//   console.log("Todo By Id", todo);
// }).catch((e) => console.log(e));

User.findById("5a1e92e3f8ccb902e9d472d3").then((user) => {
  if (!user) {
    return console.log("User not found");
  }
  console.log("User", JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e.name));