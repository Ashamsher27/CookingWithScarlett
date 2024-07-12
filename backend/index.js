// Main entry point for backend server:

require('dotenv').config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const db = require("./models/");

app.use(bodyParser.json());
  app.use(express.json());
  
  const Recipe = require('./models/recipes'); // Import your existing recipe model


//Routes
  const recipeRoutes = require('./routes/recipeRoutes');
  const apiRoutes = require('./routes/apiRoutes');

  app.use('/recipes', recipeRoutes);
  app.use('/api', apiRoutes); 


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');

    // Event listener for when the connection is established
    mongoose.connection.on('connected', function() {
      // Log the name of the database
      const dbName = mongoose.connection.client.s.options.dbName;
      //console.log(`Connected to database: ${dbName}`);

      // Ensure database creation by performing a query
      Recipe.findOne({})
        .then(async (result) => {
          if (!result) {
            console.log('No recipes found. Adding dummy recipe...');

            // Add a dummy recipe
            const dummyRecipe = new Recipe({
              recipeName: "Dummy Recipe",
              ingredients: ["dummy ingredient"],
              intolerances: [],
              cuisine: "Dummy Cuisine",
              instructions: "Dummy instructions"
            });

            await dummyRecipe.save();
            console.log('Dummy recipe inserted');
          } else {
            console.log('Recipes found in the database.');
            console.log(`Connected to database: ${dbName}`);
          }

          // Start the server after ensuring database operations
          app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
          });
        })
        .catch((error) => {
          console.error('Error querying or inserting dummy recipe:', error);
        });
    });

    // Event listener for connection errors
    mongoose.connection.on('error', function(err) {
      console.error('MongoDB connection error:', err);
    });

  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });









