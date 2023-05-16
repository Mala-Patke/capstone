const Client = require('pg');
require('dotenv').config({ path: '../.env.development.local' });

const client = new Client.Client({
    password: process.env.POSTGRES_PASSWORD,
    connectionString: process.env.POSTGRES_URL,
    ssl: true
});

async function main() {
    await client.connect();

/*     client.query("CREATE TYPE friendship_status AS ENUM('R', 'A', 'B');");
    client.query("CREATE TYPE rating AS ENUM('W', 'L', 'M');");
 */
    client.query(`CREATE TABLE users (
        id uuid PRIMARY KEY,
        username VARCHAR(16) NOT NULL,
        email VARCHAR(30) NOT NULL
    );`);
    
    client.query(`CREATE TABLE friendships (
        user1 uuid NOT NULL,
        user2 uuid NOT NULL,
        status friendship_status NOT NULL DEFAULT 'R',
        time date NOT NULL
    );`);

    client.query(`CREATE TABLE reviews (
        review_id text PRIMARY KEY,
        media_id text NOT NULL,
        user_id uuid NOT NULL,
        ratings rating NOT NULL,
        review text,
        spoilers boolean DEFAULT false
    );`);

    client.query(`CREATE TABLE hitlist (
        user_id uuid,
        media_id text,
        date_added date
    );`);
}

main();