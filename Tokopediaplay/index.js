const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load configuration from .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using the provided MONGODB_URI from .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import and use routes
const commentRoutes = require('./routes/comment.route');
app.use('/api', commentRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
