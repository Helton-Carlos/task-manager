import type { Request, Response } from 'express';
import { db } from '../db/database';
import type { User } from '../types/user';

export const loginUser = (req: Request<User>, res: Response): void => {
  const { nome, password } = req.body;

  try {
    const stmt = db.prepare(
      'SELECT id, nome, email FROM usuarios WHERE nome = ? AND senha = ?',
    );

    const user = stmt.get(nome, password) as User | undefined;

    if (!user) {
      res.status(401).json({ autenticado: false });
      return;
    }

    res.status(200).json({
      autenticado: true,
      usuario: user,
    });
  } catch (error) {
    console.error('Erro ao verificar usuário:', error);
    res.status(500).json({ erro: 'Erro no servidor' });
  }
};

export const createUser = (req: Request<User>, res: Response): void => {
  const { nome, email, password } = req.body;

  try {
    const stmt = db.prepare(
      'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
    );

    const result = stmt.run(nome, email, password);

    res.status(201).json({
      mensagem: 'Usuário criado com sucesso!',
      id: result.lastInsertRowid,
    });
  } catch (error: any) {
    console.error('Erro ao criar usuário:', error);

    if (error.message.includes('UNIQUE')) {
      res.status(409).json({ erro: 'Email já cadastrado' });
      return;
    }

    res.status(500).json({ erro: 'Erro no servidor' });
  }
};
