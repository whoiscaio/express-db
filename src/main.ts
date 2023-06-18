import express from 'express';
import { Client } from 'pg';
import router from './routes';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'ecommerce'
});

client.connect()
  .then(() => {
    console.log('Successfully connected to PostgreSQL database');
  })
  .catch(() => {
    console.log('Some error ocurred while trying to connect to your PostgreSQL database');
  });

const PORT = 3000;

const app = express();

app.use(router)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
