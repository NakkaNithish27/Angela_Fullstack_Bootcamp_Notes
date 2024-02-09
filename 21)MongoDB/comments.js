//Installing MongoDB on windows
C:\Program Files\MongoDB\Server\6.0\data\
vim filename //to edit with vim editor
type i to enter insert mode
esc to exit insert mode
:wq! to save and exit vim


//MongoDB CRUD Operation in the shell: Create
//In 6.0 mongoDB we need to install mongosh externally,and put that extracted folder in bin
//In .bash_profile
alias mongod="/c/Program\ files/MongoDB/Server/6.0/bin/mongod.exe"
alias mongo="/c/Program\ Files/MongoDB/Server/6.0/bin/mongosh-1.6.1-win32-x64/bin/mongosh.exe"
/*once edited the .bash_profile using vim,we need to restart the terminal in order for the mongo
shortcut to work*/

mongod //it will starts the mongodb server that is connected to the local mongoDB database
//Open a new terminal tab
mongo //Opens a Mongo shell

show dbs //shows the databases
use shopDB //creates a database
db //to know on which database u are currently in

db.products.insertOne({_id:1,name:"Pen",price:1.20}) //creates a collection and inserts one document in it
db.products.insertMany()

//a collection in mongoDB is like a table in sql world,and a document is like a row of the table
show collections //It will shows the collections present in the current db


//Reading and Queries
db.products.find() //shows all the documents present inside that collection
db.collection.find(query, projection, options) //Read documentation
//here projection means the fields that we want to return
db.products.find({name:"Pencil"}) //only query
db.products.find({price:{$gt:1}}) //only query
db.products.find({_id:1},{name:1}) //query and projection here we can use 1 or true
[ { _id: 1, name: 'Pen' } ]
//Whenever we use find,_id always comes by default,if we dont want it,we can set it to false in projection
db.products.find({_id:1},{name:1,_id:0})
[ { name: 'Pen' } ]


//Update
db.products.updateOne({_id:1},{$set:{stock:32}})

//Delete
db.products.deleteOne({_id:2})

//Relationships in MongoDB
//There are two ways
//First way is the most preferred method

db.products.insert(
{
_id:3,
name:"Rubber",
price:1.30,
stock:43,
reviews:[
{authorName:"Sally",
rating:5,
review:"Best rubber ever!"
},
{authorName:"John",
rating:5,
review:"Awesome rubber!"
}
]
}
)

//This way of embedding documents inside another document is suitable for one to many relationships
//One product will have many reviews
//One user will create many comments

//Another format we might see out there in the wild is,we might have two product documents
and we could create another collection say a collection of orders and for each document in that
orders collection we might have like shown below
//products collection
[
  { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
  { _id: 2, name: 'Pencil', price: 0.8, stock: 12 }
]
//orders collection
[
  {orderNumber:3243,productsOrdered:[1,2]}
]

//Working with the Native MonogDB driver
//until now we have seen how to use mongoDB in an isolated setting ie., in command line through mongoshell
//We need to learn how to integrate MongoDB database in Nodejs application
//Two ways to do this
//One way is to use MongoDB native driver
//Another way is to use ODM(Object Document Mapper) thats called mongoose
/*mongoose is popular because it vastly simplifies and cuts down the code that required in order to
work with the mongoDB database*/

//How the Native MongoDB driver works
//Read Node.js Driver documentation
npm init -y //initialize npm and accept all the defaults
//In reality most developers who are working with node and mongoDB will rarely use Native mongoDB driver
/*Native mongoDB allows a lot of personalization and you can drill down to the specifics and u can set up and use MongoDB database
with a high level of control*/
