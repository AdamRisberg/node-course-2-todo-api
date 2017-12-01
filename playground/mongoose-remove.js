const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({}).then((todo) => {

// });

// Todo.findOneAndRemove({ _id: "5a210cb95ee5fc25513eb060" }).then((todo) => {

// });

Todo.findByIdAndRemove("5a210cb95ee5fc25513eb060").then((todo) => {
  console.log(todo);
});