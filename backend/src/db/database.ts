import { open } from 'node:sqlite';
import sqlite3 from 'node:sqlite/sqlite3';
import type { Database } from 'sqlite';

export async function createDB(): Promise<Database> {
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    )
  `);

  return db;
}
