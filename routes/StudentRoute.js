import { Router } from "express";
import {
    insertStudent,
    getAllStudents,
    getStudentById,
    modifyStudent,
    removeStudent
} from '../controllers/StudentController.js'

const router = Router();

router.post('/alunos', insertStudent);
router.get('/alunos', getAllStudents);
router.get('/alunos/:id', getStudentById);
router.put('/alunos/:id', modifyStudent); 
router.delete('/alunos/:id', removeStudent);

export default router;