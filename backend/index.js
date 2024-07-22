// Main entry point for backend server:

require('dotenv').config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require("cors")
const path = require('path')

const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const db = require("./models/");

// Allow requests from localhost:3001 (your frontend)
app.use(cors({
  origin: 'http://localhost:3001',
}));

app.use(bodyParser.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

// Serve static files from 'backendImages' directory
app.use('/images', express.static(path.join(__dirname, 'backendImages')));
  
  const Recipe = require('./models/recipes'); // Import your existing recipe model
  const Ingredient = require('./models/ingredients')

//Routes
const recipeRoutes = require('./routes/recipeRoutes');
const apiRoutes = require('./routes/apiRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');

app.use('/recipes', recipeRoutes);
app.use('/api', apiRoutes); 
app.use('/ingredientsAPI', ingredientRoutes); 

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');

    // Event listener for when the connection is established
    mongoose.connection.on('connected', function() {
      const dbName = mongoose.connection.client.s.options.dbName;

      Recipe.findOne({})
        .then(async result => {
          if (!result) {
            console.log('No recipes found. Adding dummy recipe...');

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
          console.error('Error inserting dummy recipe:', error);
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





