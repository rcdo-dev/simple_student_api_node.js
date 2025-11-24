import { Router } from "express";
import {
    insertStudent,
    getAllStudents,
    getStudentById,
    modifyStudent,
    removeStudent
} from '../controllers/StudentController.js'

const router = Router();

router.post('/students', insertStudent);
router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.put('/students/:id', modifyStudent);
router.delete('/students/:id', removeStudent);

export default router;