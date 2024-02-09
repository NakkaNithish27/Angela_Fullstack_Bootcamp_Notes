
//1
//Introduction to Authentication
//Why Authentication?
/*When a user uses our web app,they starts generating data,so in order to associate those pieces of data with individual users we
need to create an account for each user so that they would sign up to our website using a username and password and we create like an id card
for them to uniquely identify them on our database and to save all the data they generate on to that account*/
/*To restrict access to certain areas of the website depending on the status of the user,for ex take netflix/spotify if they paid for a subscription
then we update their account in our database and let them access to the tv shows or songs*/
/*The difficult part of Authentication comes from how secure youre going to make your website*/
/*We go from creating an account,adding the user to our database,saving their username and password to enable them to log in,
all the way up to covering thing such as OAuth and social logins including creating things such as sessions,cookies and hashing and encrypting passwords */
//We can add 6 levels of security to our website
//If you want u can see all of these 6 levels code,go to angela resourses


//2
//Lets add some Authentication to our website
//Level 1 security-Register users with username and password
//Here we dont have a direct get req to secets page,we send it only if the user registers by entering email and password
//we can add callback to save() method
app.post("/register",function(req,res){
  const newUser=new User({
    email:req.body.username,
    password:req.body.password
  });
  newUser.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.render("secrets");
    }
  });
});

//login to the website
app.post("/login",function(req,res){
  const username=req.body.username;
  const password=req.body.password;
  User.findOne({email:username},function(err,foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        if(foundUser.password===password){
          res.render("secrets");
        }
      }
    }
  });
});

//Here there is one problem
/*We stored all our passwords in plain text and any one of my employees can look through my database and know
what everybodys passwords,and also if hacker hack into my server and locate my database this is a pretty big loot for them */
//So dont store your users passwords in plain text

//3
//Level 2 Authentication- Database Encryption
//Caesar Cipher is one of the earliest ways of encrypting messages that we know
//     A B C D E f
// A B C D E f      //here the shift is 2

//cryptii.com

//All encryptions work the same way,we have a way of scramling a message and we require a key to unscramble the message
//We use mongoose-encryption package to encrypt any data in our database
//Theres two ways of going about encrypting your database using this mongoose-encryption package
//One way is to create encKey and sigKey (read documentation)
//Another way, which is a convenient method,we simply use a long unguessable Secret String Instead of Two Keys

const secretString="ILovewatchingAnime."      //creating a secret long unguessable Secret
userSchema.plugin(encrypt,{secret:secretString}); //Adding our mongoose-encryption package as a plugin to the userSchema
//plugins are just extra bits of packaged code that you can add to the mongoose schemas to extend their functionality or give them more powers

userSchema.plugin(encrypt,{secret:secretString}); //This will encrypt all of the document fields
userSchema.plugin(encrypt,{secret:secretString,encryptedFields: ['fieldName','fieldName']}); //To encrypt only certain fields

//mongoose-encryption works in a way that it will encrypt whem we call save() and it will decrypt when we call find()
/*This means that if somebody hack into your website they can easily access the app.js and our secretString and they can use the
same package to decrypt all the passwords*/

//4
//Using Environment variables to keep secrets safe
//Imagine if we put our project in github ,any one can see this secret string or any other api keys we have
//And using this secret key they can decrypt our entire database
//A lot of hackers scrape the internet for developers who have accidently published their secret keys/api keys
//Environment variables is a simple file where we keep our sensitive variables such as encryption keys and api keys
//We use a popular package called dotenv

npm install dotenv

require('dotenv').config()  //Add this line right at the top in app.js
//Create a .env file in your project root directory
//Add your sensitive data to .env file like this
SECRET=ILovewatchingAnime.
API_KEY=fsdfkhdfghgjsdfjsfjjdf

//you can access them like This
process.env.SECRET
process.env.API_KEY

//Create a .gitignore file and copy paste node project gitignore template

//github works on version control basis
//So the first thing you should do when you start a project is create a .env file and add it to .gitignore
//when we deploy on heroku they actually have a specific way of handling this config vars

//5
//Level 3 - Hashing Passwords
//At this moment the biggest flaw in our Authentication method is that we have an encryption key
/*So some body is motivated enough to hack into your server/database then its not that difficult for them to get your encryption key,
even if you put it in your Environment variable or somewhere secure on your server*/
//Here hashing comes into picture
/*Hash functions are mathematical equations that are designed to make it almost impossible to go backwords,so its almost impossible
to turn a hash back into password*/
//ex:finding factors of 377 otherthan 1 and itself is kinda difficult
//But we can easily multiply 13 and 29 and get 377
//This is a simple version of hash functions

npm install md5    //md5 stands for Message-Digest algorithm 5

var md5 = require('md5');

console.log(md5('message'));

//When the users register we store the hash of thier password
//When the users login we convert their entered password into hash and compare it against the stored hash
app.post("/register",function(req,res){
  const newUser=new User({
    email:req.body.username,
    password:md5(req.body.password)
  });
  newUser.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.render("secrets");
    }
  });
});

app.post("/login",function(req,res){
  const username=req.body.username;
  const password=md5(req.body.password);
  User.findOne({email:username},function(err,foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        if(foundUser.password===password){
          res.render("secrets");
        }
      }
    }
  });
});

//But hashing also comes along with its own problems


//6
//Hacking 101
//If we can see passwords in plaintext means the security methods they follow are horrible

//How passwords are hacked
//Hackers convert most of the commonly used passwords into their hashes and creats a hash table
//Now they compare the hacked database passwords hashes with the hash table they made
//what if they use their date of birth of their pets name
//How they make hash tables
//All words from a dictionary(Dictionary Attack)
//All numbers from a telephone book
//All combinations of characters up to 6 places
//All of these combine will be upto 19.8 billion combinations(can be calculated in 0.9 seconds)

//They buy latest gpus/graphics cards which are capable of parallel processing
//with one of the latest gpus you can calculate about 20 billion md5 hashes/second
//md5 is one of the quickest hashes to calculate
//The longer the password,the difficult it is to crack it


//7
//Hashing passwords with bcrypt and Salting
                    salt               Hash
password + random set of characters--------------->Hash
                                     function

//We store the salt in the database along with the hash
/*So when the user enters the password we generate the hash combining that stored salt and compare the hash generated
against the stored hash*/
// 20,000,000,000 md5 hashes/second
// 17,000 bcrypt hashes/second

//bcrypt is one of the industry standard hashing algorithms that developers use to keep their users passwords safe
//We also use salt rounds,the more the salt rounds,the saltier the passwords become
//So as the cpu power increase(according to moores law),we increase the number of salt rounds
//The database might look like this
username                  Salt                       Hash*10

//bcrypt package supports stable versions commonly
//So it is recommended to use the latest stable version,see LTS version in node official website
//how can we change the version of node that we already installed
//We use something called nvm(node version manager),go to nvm git repo and copy paste the nvm installation link in terminal
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
nvm install 10.15.0 //example

/*With every npm package there will be a link to the git repo where the code is hosted,and there we can explore the
issues people having while they are trying to use this repository*/

npm i bcrypt@versionnumber
npm install bcrypt@5.1.0 /*or simply*/ npm i bcrypt
//My advice is change node to latest LTS version and also install bcrypt latest version
const bcrypt = require('bcrypt');
const saltRounds = 10;

//bcrypt.hash() to store
app.post("/register",function(req,res){
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    const newUser=new User({
      email:req.body.username,
      password:hash
    });
    newUser.save(function(err){
      if(err){
        console.log(err);
      }else{
        res.render("secrets");
      }
    });
});
});

//bcrypt.compare() to compare
app.post("/login",function(req,res){
  const username=req.body.username;
  const password=req.body.password;
  User.findOne({email:username},function(err,foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        // Load hash from your password DB.
        bcrypt.compare(password, foundUser.password, function(err, result) {
          if(result===true){
            res.render("secrets");
          }
        });

      }
    }
  });
});

//8
//Level 5 Authentication
//COOKIES AND SESSIONS
//These cookies in web development are like fortune cookies,cuz they have a msg in them and they can be broken to reveal the message
/*Imagine if you go to amazon and add an item to your cart and immediatly u got distracted and go to another website abandoning
amazon,well what does amazon do? as soon as u added that item in your cart amazon has created a cookie and it stored that cookie
stores that cookie in our browser*/
//go to settings and search for cookies
/*cookies are used to save our browsing sessions,cookies are also used for retargetting ads,means they remind about that product
when u go to other websites*/
/*When we add a computer to our basket in amazon,it makes a post req to amazon server,and at this moment the amazon server creates
a cookie like this user wants to buy a computer and send that cookie back to browser along with the post response and the browser
is told to save that cookie*/
/*So tomorrow if u again visit amazon that cookie stored in ur browser is sent along with your get request,and the server identifies
u and sees if u have any previous sessions,its like cracking open the fortune cookie*/
/*There are a lot of different types of cookies,but the type of cookies we are looking at are the ones used to establish and
maintain a session(session cookies) */
/*A session is a period of time when a browser interacts with a server */
/*Usually when u login to a website thats when ur session starts and thats when ur fortune cookie gets created and inside that
fortune cookie you will have your user credentials that says this user is logged and has been successfully authenticated,so that
means as you continued to browse the website you wont be asked to login again when you try to access a page that requires Authentication
because they can always check against that active cookie you have on your browser and it maintains your authentication for this
browsing session until the point when you log out which is when this session ends and the cookie thats related to the session gets
destroyed*/

/*We will implement cookies and sessions into our wesite and and we do it using Passport*/
/*Passport allows you to authenticate ur users using either a local strategy like what were doing right now which is username and
password or use a whole bunch of other services such as google,facebook,linkdin and twitter, and it makes it a lot easier for you
to be able to plug these different ways of authentication into your website*/

//Using Passport.js to add cookies and sessions
//Packages we will use
passport
passport-local
passport-local-mongoose
express-session

//install all of these Packages

const session=require('express-session');
const passport=require('passport');
const passportLocalMongoose=require('passport-local-mongoose') //passport-local is a added as a dependency of this,so we dont have to require it again

//lets setup/initialize a session with some initial configuration by passing some options
app.use(session({
  secret:"I Love watching Anime.",
  resave:false,
  saveUninitialized:false
}));
//lets initialize our passport
app.use(passport.initialize());
//tell our app to use passport to also set up our session
app.use(passport.session()); //to manage those sessions using passport
//place the above three above mongoose.connect()
userSchema.plugin(passportLocalMongoose); //using this we salt and hash our passwords and to save our users into our MongoDB database

//passport-local configuration
/*Create a strategy which is gonna be the local strategy to authenticate users using their username and password and also to
serialise and deserialise our user*/
/*The serialise and deserialise is only necessary when we are using sessions and what it does is*/
/*serialise - it creates a fortune cookie and stuffs the message namely our users identifications into the cookie*/
/*deserialise - it basically allows passport to crumble the cookie and discover the message inside, which is who this user is
and all of their identification so that we can authenticate them on our server*/

/*Normally if u just use passport and passport-local u would have to write a lot more code,but because were using passport-local-mongoose ,
its going to take care of a lot that in between code for us*/

/*We just need to do is just add these three lines of code from passport-local-mongoose documentation,right below where we create our new mongoose model*/
passport.use(User.createStrategy()); //to create a local login strategy

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//lets setup the register and login post routes using passport-local-mongoose
app.post("/register",function(req,res){
  //here passport-local-mongoose does all the user creation,hashing and saving for us
  User.register({username:req.body.username},req.body.password,function(err,user){
    if(err){
      console.log(err);
      res.redirect("/register");
    }else{
      passport.authenticate("local")(req,res,function(){    //this callback is triggered only when the authentication is successful
        res.redirect("/secrets");  //Now we actually let users to directly make a get req to secrets page,because we are now using sessions
      });
    }
  });
});
app.get("/secrets",function(req,res){
  if(req.isAuthenticated()){
    res.render("secrets");
  }else{
    res.redirect("/login");
  }
});
//browser session ends when we close the tab/quit chrome
app.post("/login",function(req,res){
  const user=new User({
    username: req.body.username,
    password: req.body.password
  });
  //this login() belogs to passport package
  req.login(user,function(err){
    if(err){
      console.log(err);
    }else{
      passport.authenticate("local")(req,res,function(){  //This callback is triggered only if the user is authenticated
        res.redirect("/secrets");
      });
    }
  });
});

/*Both when they successfully registered or successfully logged in usig the right credentials,we are going to send a cookie
and tell the browser to hold onto that cookie because the cookie has a few pieces of information that tells our server about
the user,namely that they are authorized to view any of the pages that require authentication*/
/*Simply when they make post req to reg/login ,using right username and password,then a cookie is send to store on their
browser,that cookie is send to server whenever they make a get req to any of the page that require authentication */

//Lets add a logout route
app.get("/logout",function(req,res){
  //this logout() belongs to passport package
  req.logout(function(err) {  //Here we deauthenticate the user and end the user session
      if (err) { console.log(err)}
      res.redirect('/');
    });
});



//9
//Level 6 OAuth 2.0 & How to implement sign in with google
//Third Party OAuth2.0
/*OAuth - Open Authorisation ----> It is simply a open standard for token based authorization*/
/*Lets imagine we are creating an app called bracebook which is like a facebook for people with braces for teeth*/
/*When u are a new user u might not have any friends in bracebook,so what we can do as the developers of bracebook is we
can ask the user for permission to access thier facebook account and which friends they have on facebook are already users
of our service bracebook,now the user sign up they'll already see that some of their friends are already on bracebook*/
/*How this works?*/
/*On log in page,We can ask the user to sign in either manually - they dont get instant friends
Or we can ask them to sign in with facebook*/
/*In this case we make a get request to fb asking them for this user's friends on facebook and fb would return with a
post req with that list of users and emails to our server where we can compare this list against our database of users*/
/*Then we can automatically add matched users as the friends of this new user*/
/*Linkedin asks you to log in via google and it will look through all of your contacts on gmail in order to add them automatically
to linkedin */
/*By using OAuth were able to access pieces of information on these third party websites such as their friends,emails or their
contacts on gmail*/

/*In our case we delegate the task of managing passwords securely to the companies like fb and google*/
/*fb,google and so on also pepper the passwords,some companies also encrypt the entire database and have a wide array of complex
mathematical solutions to keep their user passwords under lock and key*/
/*So we ask users to login to their facebook and fb tells us whether the user is genuine or not*/
//Why OAuth?
//1)Granular Access Levels --when they login to their fb account u can request some data back from it such as thier profile,thier frds list etc
//2)Read/Read+Write access --u can request particular data ,u can also post to fb from ur website with read+write access
//3)Revoke Access -- the user can go to fb and revoke the access that they given to ur website

//How this works
/*Step 1
Set up our app in their developer console and get an app id/client id*/
/*Step 2
Redirect to Authenticate on that third party ex:fb,google */
/*Step 3
User Logs in*/
/*Step 4
User reviews the permissions that our website is asking for and Grants Permissions
*/
/*Step 5
Receive Authorisation code from facebook(Auth code)
We can also exchange Auth code for an Access token from fb and we would save it in our database
Access token lasts longer than auth code*/

npm install passport-google-oauth20 //latest 2.0 implementation

//google developers console
//New project>credentials
//OAuth consent screen---->Scopes----->Test users-------->Summary
//get a client id and a client secret
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//paste this above all the routes code
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"

  },
  function(accessToken, refreshToken, profile, cb) {
    // console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


const findOrCreate = require('mongoose-findorcreate')
userSchema.plugin(findOrCreate);  //inorder for User.findOrCreate() to work

//These will work for all strategies
passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

//When user clicks signup with google they make a get req to this route
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }) //This opens google login page
);
//Scope is which user data that we want to get from that third party

//After successful login it redirects to this route
app.get('/auth/google/secrets',
  passport.authenticate('google', { failureRedirect: '/login' }),  //starts a session
  function(req, res) {
    // Successful authentication, redirect to secrets page.
    res.redirect('/secrets');
  });

//In userSchema we should have a googleId field

//Bootstrap social buttons
https://lipis.github.io/bootstrap-social/
//Download and extract>we need bootstrap-social.css file

//Lets finish our app
/*Passport saves user details in req variable,we can access it using req.user*/
app.post("/submit",function(req,res){
  const secret=req.body.secret;
  User.findById(req.user.id,function(err,foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        foundUser.secret=secret;
        foundUser.save(function(){
          res.redirect("/secrets");
        });
      }
    }
  })
})

app.get("/secrets",function(req,res){
  User.find({secret:{$ne:null}},function(err,foundUsers){ //All users with secret field not equal to null
    if(err){
      console.log(err);
    }else{
      if(foundUsers){
        res.render("secrets",{usersWithSecrets:foundUsers})
      }
    }
  })
});
