import { DatabaseSync } from "node:sqlite";

export const db = new DatabaseSync("./task.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS create_tasks (
    task_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    created_at TEXT NOT NULL,
    typeCall TEXT NOT NULL,
    sector TEXT NOT NULL,
    company TEXT NOT NULL,
    priority TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
  );
`);
