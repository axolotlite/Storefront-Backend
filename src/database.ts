import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const { PGHOST, PGDATABASE_DEV, PGDATABASE_TEST, PGUSER, PGPASSWORD, NODE_ENV } = process.env;

let client: Pool = new Pool();

if (NODE_ENV == 'test') {
  client = new Pool({
    user: PGUSER,
    host: PGHOST,
    database: PGDATABASE_TEST,
    password: PGPASSWORD,
    port: 5432,
  });
}

if (NODE_ENV == 'dev') {
  client = new Pool({
    host: PGHOST,
    database: PGDATABASE_DEV,
    user: PGUSER,
    password: PGPASSWORD,
  });
}

export default client;
