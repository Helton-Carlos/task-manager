import { db } from "../db/database";
import { AuthService } from "../services/ auth.service";

import type { Request, Response } from "express";
import type { User } from "../types/user";

export const loginUser = (req: Request<User>, res: Response): void => {
  const { email, password } = req.body;

  try {
    const stmt = db.prepare(
      "SELECT id, name, email FROM users WHERE email = ? AND password = ?",
    );

    const user = stmt.get(email, password) as User | undefined;

    if (!user) {
      res.status(401).json({ authentication: false });
      return;
    }

    res.status(200).json({
      authentication: true,
      users: user,
    });
  } catch (error) {
    console.error("Erro ao verificar usuário:", error);
    res.status(500).json({ erro: "Erro no servidor" });
  }
};

export const createUser = async (req: Request<User>, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await AuthService.hashPassword(password);

    const stmt = db.prepare(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    );

    const result = stmt.run(name, email, hashedPassword);

    const token = AuthService.generateToken({
      id: result.lastInsertRowid,
      email,
      name,
    });

    res.status(201).json({
      message: "Usuário criado com sucesso!",
      id: result.lastInsertRowid,
      token,
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

export const getAllUser = (req: Request, res: Response): void => {
  try {
    const stmt = db.prepare("SELECT * FROM users");

    const resposta = stmt.all();

    res.status(200).json(resposta);
  } catch (erro) {
    res.status(500).json({ erro: "Erro no servidor" });
  }
};
