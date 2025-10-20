const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const contentRoutes = require('./routes/contentRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const { authenticate } = require('./middlewares/authMiddleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/cms', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/content', authenticate, contentRoutes);
app.use('/api/media', authenticate, mediaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});