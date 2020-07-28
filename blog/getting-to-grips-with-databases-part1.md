---
layout: _post-layout.njk
title: Getting to Grips with Databases - Part 1
tags: ['post']
description: For the uninitiated, databases can seem a complicated, mythical thing that only back-end developers, computer scientists, and programmers can work with.
short_description: Dispelling the myth that databases are so complicated that only back-end developers, computer scientists, and programmers can work with them.
keywords: databases, MongoDB, first database, how to create a database, creating your first database
fb_link: https://www.facebook.com/sharer.php?u=https://louisefindlay.com/blog/getting-to-grips-with-databases-part1
ctt_link: https://ctt.ac/c8a2U
linkedin_link: https://www.linkedin.com/sharing/share-offsite/?url=https://louisefindlay.com/blog/getting-to-grips-with-databases-part1
hero_image: https://res.cloudinary.com/practicaldev/image/fetch/s--ZWdn7o2F--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--mzT7jA-_--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/i/eoz84f7qrpalp5nl67bw.png
---
<!-- Excerpt Start -->
For the uninitiated, databases can seem a complicated, mythical thing that only back-end developers, computer scientists, and programmers can work with. This article is here to dispel that myth and prove that all you need to work with a database is some basic knowledge about the command line and JSON.
<!-- Excerpt End -->
### MongoDB Installation

![mongodb.png][1]
  
[MongoDB][2] is a popular NoSQL database that you can run both locally and in the cloud (called MongoDB Atlas.) NoSQL stands for not just SQL and means it is non-relational which makes it easier to adapt to different types of data.

To run MongoDB locally, first you'll have to install the Community Server from their [site][3]. To start, we'll be interacting with the database through the command line. Windows users will have to add mongo (the command used to run MongoDB) to their PATH so they can run the command successfully.

![system-environment-variables.png][4]

**Windows users only**: Type `env` into the search box and press Enter when the Edit the system environment variables result is selected. Click Environment Variables and click Path under System variables. Edit this and add a new entry containing `C:Program FilesMongoDBServer4.2bin`. You may need to update the 4.2 part when new versions of MongoDB Community Server are released.

Click OK to exit all the dialog boxes.

```bash
$ mongo
Mongo Shell version v4.2.3
```

### Testing the Install

To test that the installation has worked correctly, open a terminal window, and type `mongo`. If a message starting with `MongoDB shell version` appears then the installation has been successful. Now you're ready to create your first database.

Enter `use firstdb`. Mongo will create a database called firstdb if there isn't one already, or switch to it if it exists.

### Adding Data

To add some data, type `db.books.insert( { name: "Harry Potter and the Chamber of Secrets", genre: "Fantasy" } )`. The result should be `WriteResult({ "nInserted" : 1 })` which tells you the number of entries inserted.

This will create a collection called Books (because there isn't already one) and add an entry with the book's name and genre. You can check this by typing `db.books.find()`.

```json
db.books.find()
{ "_id" : ObjectId("5ed79cc24096aca107f150fc"), "name" : "Harry Potter and the Chamber of Secrets", "genre" : "Fantasy" }
```

Collections are groups of related data so one database can have multiple collections in it. Data is added through keys and values and stored in the database in JSON format. If you've worked with APIs before, chances are you've encountered JSON.

To show all collections in the database, type `show collections`. To delete the collection, type `db.books.drop()`.

### Finding and Deleting Data

Once you've created a few more entries, you'll probably want to find a specific one. Using `findOne()` instead of find will let you search for a specific key-value pair.

Make sure the key-value is unique. For example, `db.books.findOne( { "name" : "Harry Potter and the Chamber of Secrets" } )` searches for an entry in the books collection with the name of Harry Potter and the Chamber of Secrets.

```json
db.books.findOne( { "name" : "Harry Potter and the Chamber of Secrets" } )
{
	"_id" : ObjectID("5ed79cc24096aca107f150fc"),
	"name" : "Harry Potter and the Chamber of Secrets",
	"genre" : "Fantasy"
}
```

If you're looking to delete entries instead, use the `deleteOne()` and `deleteMany()` commands. For example, `db.books.deleteMany( { "genre": "Sci-Fi" } )` deletes entries in the books collection that have the Sci-Fi genre.

### Database Complete

Congratulations, you've now created your first database and can add, delete, and find collections and entries in it. To learn how you can incorporate your newfound database knowledge on a website, look out for Getting to Grips with Databases Part 2: Develop Your First Data-Driven Website.

* * *

This article was first published on [Section](https://www.section.io/engineering-education/working-with-databases-part1/ "Permalink to Getting to Grips with Databases - Part 1")

[1]: https://www.section.io/assets/images/education/mongodb.png
[2]: https://www.mongodb.com/
[3]: https://www.mongodb.com/download-center/community
[4]: https://www.section.io/assets/images/education/system-environment-variables.png
  