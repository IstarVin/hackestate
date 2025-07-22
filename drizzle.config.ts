import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

if (process.env.NODE_ENV) {
	config({ path: './.env.' + process.env.NODE_ENV });
}

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: { url: process.env.DATABASE_URL },
	verbose: true,
	casing: 'snake_case',
	strict: true
});
