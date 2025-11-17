import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productRoutes from './routes/products.js';
import logger from './middleware/logger.js';
import auth from './middleware/auth.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(logger);

// public route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// protected routes
app.use('/api/products', auth, productRoutes);

// global error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
