import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'ecommerce',
});

client
  .connect()
  .then(() => {
    console.log('Successfully connected to PostgreSQL database');
  })
  .catch(() => {
    console.log(
      'Some error ocurred while trying to connect to your PostgreSQL database'
    );
  });

async function query(query: string, values?: any[]) {
  const { rows } = await client.query(query, values);

  return rows;
}

export default {
  query,
};
