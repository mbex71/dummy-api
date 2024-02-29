import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { users } from './schema/users'
const connectionString = process.env.DATABASE_URL as string

export const client = postgres(connectionString)   
export const db = drizzle(client);

// const allUsers = await db.select().from(users);