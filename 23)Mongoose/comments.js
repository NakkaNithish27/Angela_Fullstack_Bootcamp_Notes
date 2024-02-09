Section 27:Mongoose
//336)Introduction to Mongoose
//Mongoose is called ODM(Object Document Mapper)
//It allows our Nodejs app which speaks the language of js objects to be able to talk to MongoDB database
//which speaks in the language of documents and collections and databases.
db.dropDatabase() //Drops/deletes a database
npm install mongoose

const mongoose=require("mongoose");

mongoose.set('strictQuery', false);
//connects to fruitsDB database
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

//Create a schema
const fruitSchema=new mongoose.Schema({
  name:String,
  rating:Number,
  review:String
});

//Create a model using that Schema
const Fruit=new mongoose.model("Fruit",fruitSchema);  //We can assume this model as our collection
//Above line Creats a collection called fruits by pluralizing and dropping the capital F of the Fruit
//Its actually using lodash to achieve this

//Create a document using that model
const fruit=new Fruit({
  name:"Apple",
  rating:7,
  review:"Pretty solid as a fruit"
});

//Save to the fruits collection
fruit.save();

//Inserting many documents at a time using model(mongoose docs>API>Model)
Fruit.insertMany([kiwi,orange,banana],function(err){
  if(err){
    console.log(err);
  }else{
    console.log("successfully saved all the fruits to fruitsDB");
  }
});

//2
//Reading from the database
Fruit.find({},function(err,fruits){  //{} no condition means find everything
  if(err){
    console.log(err);
  }else{
    console.log(fruits);
  }
});
//Its good practice to close our database connection once we are done with it
mongoose.connection.close();

//3
//Data Validation with Mongoose
//Mongoose makes the Validation of data entry a lot easier,instead of writing our own assert statements all over the place and specifying specific things
//We can actually use Mongooses built in Validation checks to make it a lot easier and a lot quicker to use
const fruitSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true //required:[true,"Please check your data entry,no name specified!"]
  },
  rating:{
    type:Number,       //Instead of just datatype,we also add Validation
    min:1,             //mongoose docs>Validation
    max:10
  },
  review:String
});

//Validation keeps our data clean in a format that we expect it to be

//4
//Update and Delete Data using Mongoose
Fruit.updateOne({_id:"63aaf44e2368875c27fc2dc4"},{name:"Mango"},function(err){ //Filter,update and callback
  if(err){
    console.log(err);
  }else{
    console.log("successfully updated");
  }
});

//Deleting a particular Document
Fruit.deleteOne({name:"Peach"},function(err){  //model.deleteMany()
  if(err){
    console.log(err);
  }else{
    console.log("Document deleted successfully!");
  }
});

//5
//Establishing Relationships and Embedding Documents into each other
//We have two collections,People and Fruits
//What if John inside of People collection have a favourite fruit,which embeds a fruit document from our fruits collection
//We would do it by establishing a relationship

//We cant simply embed fruit by saying Person.updateOne() and add a field thats not specified in the Schema
//So first we need to specify it in the personSchema
const personSchema=new mongoose.Schema({
  name:String,
  age:Number,
  favouriteFruit:fruitSchema
});


const Person=new mongoose.model("Person",personSchema);

const person=new Person({
  name:"Amy",
  age:37,
  favouriteFruit:pineapple
})
person.save();

//Now the person inside people collection have a relationship with a fruit inside fruits collection
