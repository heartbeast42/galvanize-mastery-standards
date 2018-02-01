* for this standard I chose to examine Slelp2 https://github.com/Slelp/Slelp_2.0 by...
  * https://github.com/kylegibson15
  * https://github.com/kalaver8
  * https://github.com/LukeRomberg

The image in this dir called `dependancies-libs-in-package-json.png` shows the installed NPM modules which are libraries.  The dependancies on a node project can be found in the `package.json` file.  in this case the dependancies are

"dependencies": {
  "body-parser": "^1.18.2",
  "dotenv": "^4.0.0",
  "express": "^4.16.2",
  "hbs": "^4.0.1",
  "knex": "^0.13.0",
  "method-override": "^2.3.10",
  "pg": "^7.3.0"
}

dependancies is an object that resides in the larger `package.json` object, each item in the dependancies object is comprised of the the package name and the version for example. Version `1.18.2` of the package called `body-parser` is installed.

each library explained

* body-parser
  * body-parser is a library for formatting and parsing network requests using the `req.body` property.
* dotenv
  * dotenv allows you to store and load environment variables in a file called `.env` that is stored in the root of the project.  The variables can be obfuscated by `.gitignor`-ing the file and can be accessed by the process.env property.
* express
  * express is a quick and easy server and router set up that allows you to write routes for a website and serve the site easily.
* hbs
  * hbs is short for handlebars which is an html-esque templating engine that allows for looping and other conditional operations within an html like context it makes things possible that are not possible in regular html
* knex.
  * knex is an ORM (Object Relational Mapping) library for connecting to a database and writing queries in a standardized way within JavaScript.
* method-override.
  * method-override allows HTTP requests other than just GET and POST to be made from within html/DOM, this is useful for interacting with a database and you want to send an HTTP DELETE or POST or PATCH request or something like that.
* pg
  * pg is for PostgreSQL which is a database technology. pg is a PostgreSQL client for nodejs.

Thanks
