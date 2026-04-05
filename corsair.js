import 'dotenv/config';
import Database from 'better-sqlite3';
import { createCorsair } from 'corsair';
import { github } from 'corsair/plugins/github';

const db = new Database('corsair.db');

export const corsair = createCorsair({
    plugins: [github()],
    database: db,
    kek: process.env.CORSAIR_KEK,
});