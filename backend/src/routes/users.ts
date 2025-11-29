import { Router } from 'express';
import { loginUser } from '../controllers/user.controllers';

const userRouter = Router();

userRouter.post('/get-users', loginUser);

export default userRouter;
