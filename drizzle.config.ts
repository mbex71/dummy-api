import { defineConfig } from 'drizzle-kit'
export default defineConfig({
 schema: "./db/schema/*",
  driver: 'pg',
  out:'./drizzle',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
  
})