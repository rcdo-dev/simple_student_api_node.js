import { Router } from "express";
import {
    insertStudent,
    getAllStudents,
    getStudentById,
    modifyStudent,
    removeStudent
} from '../controllers/StudentController.js'

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - course
 *         - ra
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID of the student
 *         name:
 *           type: string
 *           description: Student's full name
 *         telephone:
 *           type: string
 *           description: Student's phone number
 *         email:
 *           type: string
 *           description: Student's email address
 *         course:
 *           type: string
 *           description: Course the student is enrolled in
 *         ra:
 *           type: string
 *           description: Student's academic registry number
 *       example:
 *         id: 64a4b9fbc123ab4567890123
 *         name: Marco Antonio
 *         telephone: "11988887777"
 *         email: marcoA@teste.com
 *         course: Análise e Desenvolvimento de Sistemas
 *         ra: "123456"
 */

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Register a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: Student successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 */
router.post('/students', insertStudent);

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of all students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */
router.get('/students', getAllStudents);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The student's ID
 *     responses:
 *       200:
 *         description: Student data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 */
router.get('/students/:id', getStudentById);

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The student's ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: Student successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 */
router.put('/students/:id', modifyStudent);

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The student's ID
 *     responses:
 *       200:
 *         description: Student successfully deleted
 *       404:
 *         description: Student not found
 */
router.delete('/students/:id', removeStudent);

export default router;