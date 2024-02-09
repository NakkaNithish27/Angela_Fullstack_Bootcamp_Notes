//Build your own RESTful API

Client<---->Server<----->DataBase

//1
//REST stands for Representational State Transfer
//If the server encounters a req(HTTP request) that cant be fullfilled it gives error 404(resource doesnt exist)
//Hyper text transfer protocol(Http) is not the only language that servers can speak,we also have FTP Request(File Transfer Protocol)
//HTTPS stands for HTTP secure request,any one can tap into the req,res that are going across the internet and can be tapped by lots of people.
//So we can use cryptography and encrypt our request.
/*There is only a certain amount of things that the server can do,the server will have a whole bunch of APIs which are the services that it can
expose the clients to tap into*/

//REST is just an architectural style for designing APIs ,and its not the only architectural style we have.
//We have SOAP,GraphQL,FALCOR and theres a lot of other architectural styles
//REST proposes a set of rules that web developers could follow when theyre building their APIs.
/*If every web API was built using the same common guiding principles then it would be so easy for everybody to work together and be able to use different
APIS quickly,easily and efficiently*/
/*Important rules to follow to make our API restful*/
//1)Use the HTTP request verbs
//2)Use specific pattern of routes/endpoint URLs

//HTTP request verbs are
get     -Read from the database
post 	-Create some data in the database
put							      -Update some data in the database(It replaces the entire entry/document)
patch(it was added to the HTTP request language very recently)-Update some data in the database(It only replaces the certain piece of the entry/document)
delete  - Deletes a particular piece of data in the database

//specific pattern of routes/endpoint URLs
ex:www.google.com/elephants
www.google.com/camels etc.,

//RESTful routing

HTTP verbs		/articles		               /articles/jack-bauer

GET		Fetches all the articles	        Fetches the article on jack-bauer

POST		Creates one new article			            -

PUT		           	-			                Updates the article on jack-bauer

PATCH			        -		                  Updates the article on jack-bauer

DELETE		Deletes all the articles	    Deletes the article on jack-bauer


//2
//Creating a database with Robo 3T
//We are going to create a wikipedia style api
//Robo 3T is a gui to work with a mongodb database
//Create a new database called wikiDB>create a collection called articles>insert the documents

{
    "_id" : ObjectId("5c139771d79ac8eac11e754a"),
    "title" : "API",
    "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
}


{
    "_id" : ObjectId("5c1398aad79ac8eac11e7561"),
    "title" : "Bootstrap",
    "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
}


{
    "_id" : ObjectId("5c1398ecd79ac8eac11e7567"),
    "title" : "DOM",
    "content" : "The Document Object Model is like an API for interacting with our HTML"
}

//Set up server

//Lets implement everything that is present in the table

//3
//Get All Articles
//In case of err its better to send it to client
app.get("/articles",function(req,res){
  Article.find(function(err,foundArticles){
    if(!err){
      res.send(foundArticles);
    }else{
      res.send(err);
    }
  })
});


//4
//Post a new Article
/*Here the client sends a piece of data to the server,but here we dont have a web form,then how can we build our API without the need for building the frontend*/
/*Here comes a handy tool called postman,it helps us to test our api without building the frontend at all*/
/*We have our server that can speak to the database and were exposing certain parts of our server through the APIs were
building,so that clients can be able to work with our database*/
/*Here client can be a number of things,a browser trying to load up a web page, it makes a get req and the server sends relevant html,css and js files*/
/*Here client can also make a get req that is looking for a particular resourse say some data or a file*/

//go to postman>body>enter the data with the respective keys to access them in our app.js
app.post("/articles",function(req,res){
  const newArticle=new Article({
    title:req.body.title,
    content:req.body.content
  });
  newArticle.save(function(err){
    if(!err){
      res.send("Successfully added a new article");
    }else{
      res.send(err);
    }
  });
});
//we can add a callback to save() method to tell the client whether the post req is successful or not.


//5
//Delete All Articles
app.delete("/articles",function(req,res){
  Article.deleteMany(function(err){
    if(!err){
      res.send("Successfully deleted all the articles");
    }else{
      res.send(err);
    }
  });
});

//Chained route handlers using Express
app.route("/articles")
   .get()
   .post()
   .delete();


//6
//Get a Specific Article
app.route("/articles/:articleTitle")
   .get(function(req,res){
     Article.findOne({title:req.params.articleTitle},function(err,foundArticles){ //here Jack%20Bauer is decoded as Jack Bauer
       if(foundArticles){
         res.send(foundArticles);
       }else{
         res.send("No articles found with that title");
       }
     });
   });

//If we want to access the title with space in it,for example, Jack Bauer ,then in url encoding the space is represented as %20
//Search html url encoding and see w3schools.

//7
//Put a Specific Article
//Put req is like replacing the entire bicycle(from that amazon example)

/*By default if we were to update our document using MongoDB,then overwrite is already enabled,and it will overwrite the document
if you dont include all of the fields in your update*/
/*But by default mongoose will prevent properties being overwritten and deleted*/
    .put(function(req,res){
        Article.updateOne({title:req.params.articleTitle},
          {$set: {title:req.body.title,content:req.body.content}},
          {overwrite: true},
          function(err){
            if(!err){
              res.send("Successfully updated the article");
            }
          });

    //(or)

    .put(function(req, res) {
      Article.findOneAndReplace({
          title: req.params.articleTitle
        },
        req.body, null,
        function(err, docs) {
          if (err) {
            console.log(err)
          } else {
            res.send("Document replaced Successfully!");
          }
        }
      );
  // Article.update(    //Its saying Article.update() is deprecated
  //   {title:req.params.articleTitle},
  //   {title:req.body.title,content:req.body.content},
  //   {overwrite:true},
  //   function(err){
  //     if(!err){
  //       res.send("Successfully updated the article");
  //     }
  //   }
  // );
  //});


//8
//Patch a specific article
//If you want to only want to update a specific field in a specific document then the HTTP method that we should be using is patch();

//9
.patch(function(req, res) {
  Article.updateOne({
      title: req.params.articleTitle
    }, {
      $set: req.body
    },
    function(err) {
      if (!err) {
        res.send("Successfully updated the article");
      }
    }
  );
})

//10
//Delete a specific article
.delete(function(req, res) {
  Article.deleteOne({
    title: req.params.articleTitle
  }, function(err) {
    if (!err) {
      res.send("Article deleted successfully!");
    } else {
      res.send(err);
    }
  });
});
