const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please check your data entry,no name specified!"]
  },
  rating:{
    type:Number,       //Instead of just datatype,we also add Validation
    min:1,             //mongoose docs>Validation
    max:10
  },
  review:String
});

const Fruit=new mongoose.model("Fruit",fruitSchema);

// const fruit=new Fruit({
//   name:"Apple",
//   rating:4,
//   review:"Pretty solid as a fruit"
// });

// fruit.save();

// const kiwi=new Fruit({
//   name:"Kiwi",
//   rating:10,
//   review:"The best fruit"
// });
// const orange=new Fruit({
//   name:"Orange",
//   rating:4,
//   review:"Too sour for me"
// });
// const banana=new Fruit({
//   name:"Banana",
//   rating:3,
//   review:"Weird texture"
// });
// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully saved all the fruits to fruitsDB");
//   }
// });

const grape=new Fruit({
  name:"Grape",
  rating:9,
  review:"Decent Fruit!"
});
// grape.save();
const personSchema=new mongoose.Schema({
  name:String,
  age:Number,
  favouriteFruit:fruitSchema
});


const Person=new mongoose.model("Person",personSchema);

const person=new Person({
  name:"John",
  age:32,
  // favouriteFruit:pineapple
})
// person.save();
Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    // console.log(fruits);
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }
});

Person.updateOne({_id:"63ab01f147789ee4408714b6"},{favouriteFruit:grape},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("successfully updated");
  }
});

// Fruit.deleteOne({name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Document deleted successfully!");
//   }
// });
// Person.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully deleted!")
//   }
// });
