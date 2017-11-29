// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // deleteMany
  // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection("Users").deleteMany({name: "Adam Risberg"}).then((result) => {
    console.log(result.result);
  });

  db.collection("Users").findOneAndDelete({ _id: new ObjectID("5a1d472c4e42dc01440857a0")}).then((result) => {
    console.log(result);
  });

  //db.close();
});

// delete many with my name

// find one and delete by id (pick one)