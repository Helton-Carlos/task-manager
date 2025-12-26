import { db } from "../db/database";

import type { Request, Response } from "express";
import type { Task } from "../types/task";

export function createTask(req: Request<Task>, res: Response): void {
  const {
    task_id,
    user_id,
    name,
    created_at,
    typeCall,
    sector,
    company,
    priority,
  } = req.body;

  try {
    const stmt = db.prepare(
      "INSERT INTO create_tasks(task_id, user_id, name, created_at, typeCall, sector, company, priority) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    );

    const result = stmt.run(
      task_id,
      user_id,
      name,
      created_at,
      typeCall,
      sector,
      company,
      priority
    );

    res.status(201).json({
      mensagem: "tarefa criada com sucesso!",
      id: result.lastInsertRowid,
    });
  } catch (error: any) {
    console.error("Erro ao criar tarefa:", error);

    if (error.message.includes("UNIQUE")) {
      res.status(409).json({ erro: "tarefa já cadastrada" });
      return;
    }

    res.status(500).json({ erro: "Erro no servidor" });
  }
}
