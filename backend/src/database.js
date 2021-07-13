import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/graphql-react", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
.then(db => console.log(`Database ${db.connection.name} is connected`))
.catch(err => console.error(err));
