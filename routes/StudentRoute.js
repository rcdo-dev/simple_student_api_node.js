import { Router } from "express";
import {
    insertStudent,
} from '../controllers/StudentController.js'

const router = Router();

router.post('/alunos', insertStudent);

export default router;