import 'dotenv/config'
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db, client } from './index';
// This will run migrations on the database, skipping the ones already applied
const main = async () =>{

    await migrate(db, { migrationsFolder: './drizzle' });
    await client.end();
}
// Don't forget to close the connection, otherwise the script will hang

main()