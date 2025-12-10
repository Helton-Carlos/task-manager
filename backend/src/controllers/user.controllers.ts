import type { Request, Response } from "express";
import { db } from "../db/database";
import type { User } from "../types/user";

export const loginUser = (req: Request<User>, res: Response): void => {
  const { email, password } = req.body;

  try {
    const stmt = db.prepare(
      "SELECT id, name, email FROM users WHERE email = ? AND password = ?"
    );

    const user = stmt.get(email, password) as User | undefined;

    if (!user) {
      res.status(401).json({ autenticado: false });
      return;
    }

    res.status(200).json({
      autenticado: true,
      users: user,
    });
  } catch (error) {
    console.error("Erro ao verificar usuário:", error);
    res.status(500).json({ erro: "Erro no servidor" });
  }
};

export const createUser = (req: Request<User>, res: Response): void => {
  const { name, email, password } = req.body;

  try {
    const stmt = db.prepare(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
    );

    const result = stmt.run(name, email, password);

    res.status(201).json({
      mensagem: "Usuário criado com sucesso!",
      id: result.lastInsertRowid,
    });
  } catch (error: any) {
    console.error("Erro ao criar usuário:", error);

    if (error.message.includes("UNIQUE")) {
      res.status(409).json({ erro: "Email já cadastrado" });
      return;
    }

    res.status(500).json({ erro: "Erro no servidor" });
  }
};
