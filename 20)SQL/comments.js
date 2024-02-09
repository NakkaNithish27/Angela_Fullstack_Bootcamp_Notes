//1
//Databases Explained SQL(Structured Query Language) vs NOSQL(Not Only Structured Query Language)
//Depending on the type of data that youre looking to store,and the structure of the data we choose Databases.
//The main diff b/n Databases is whether they are sequel based or no sequel based
//Top SQL Databases are MySQL and Postgres
//Top NOSQL Databases are mongoDB and redis
//SQL Databases stores data in tables
//In sql databases for all cells that dont have a value will be inserted NULL,and NULL can be very dangerous
//In nosql the data is stored as an array of Javascript objects,and it is helpful for startups where your datastructure is not predefined
//Implementing relationships in nosql databases is difficult
//sql and nosql databases are also called as Relational and Non-Relational Databases
//In sql we put data in separated tables and we give connections between them with the help of ids,so in future we can combine them
//In nosql we can also connect various documents ,ex:order document,person document,product documents
//If your data need many relationships choose SQL
//If your data has one to many relationship then choose NOSQL databases ex:one user to many posts
//As the data increases sql database becomes slow,it is not scalable ,we will need powerful computer
//Managing large amounts of data using sql database is like scaling a building vertically
/*Where as in mongoDB each row is represented as a Javascript object,so instead of buying a poweful computer,it allows us a
distrubuted system,so your database can be distrubuted among lot of different computers,so we scale horizontally*/
//In case of a sql database we need to have a fixed schema before storing data,where mongoDB is more flexible to changes
//mongoDB is not great with complex relationships


//2
//SQL Commands:CREATE Table and INSERT Data
//We tend to write keywords in uppercase ex:SELECT,FROM etc.,
//For every database the first thing to learn is CRUD operations, it means Create,Read,Update and Destroy data
//Go to w3schools,it has best documentation for sql
//Create table
CREATE TABLE products(
id INT NOT NULL,
name STRING,
price MONEY,
PRIMARY KEY (id)
)
//Insert data into it
INSERT into products VALUES (1,"Pen",1.2)
INSERT into products(id,name) VALUES (2,"Pencil")

//3
//SQL commands READ,SELECT and WHERE
SELECT * FROM products
SELECT * FROM products WHERE id=1

//4
//Update Single Values and Adding Columns in SQL
UPDATE products set price=0.8 WHERE id=2
//If we want to add a new column to table,it means we need to alter the table
ALTER table products add stock int 

//5
//DELETE
//If we want to delete a record
DELETE FROM products WHERE id=2 

//6
//Sql Relationships,Foreign keys
//Each table should have a primary key
//A foreign key of one table is a primary key of another table thats how we create connections
//Later we use joins to form a table as our wish ex:inner join,left join and so on