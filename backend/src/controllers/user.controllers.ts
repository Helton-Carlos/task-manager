import type { Request, Response } from 'express';
import { createDB } from '../db/database';
import type { User } from '../types/user';

export const loginUser = async (
  req: Request<{}, {}, User>,
  res: Response,
): Promise<void> => {
  const { nome, password } = req.body;

  try {
    const db = await createDB();

    const user = await db.get<User>(
      'SELECT id, nome, email FROM usuarios WHERE nome = ? AND senha = ?',
      [nome, password],
    );

    if (!user) {
      res.status(401).json({ autenticado: false });
      return;
    }

    res.status(200).json({
      autenticado: true,
      usuario: {
        id: user.id,
        nome: user.nome,
        email: user.email,
      },
    });
  } catch (err) {
    console.error('Erro ao verificar usuário:', err);
    res.status(500).json({ erro: 'Erro no servidor' });
  }
};
