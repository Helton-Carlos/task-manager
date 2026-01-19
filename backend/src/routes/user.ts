import { Router } from "express";
import {
  getAllUser,
  loginUser,
  createUser,
} from "../controllers/user.controllers";

const router = Router();

router.get("/list-users", getAllUser);
router.post("/login", loginUser);
router.post("/register", createUser);

export default router;
