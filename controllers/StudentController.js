import * as StudentService from '../services/StudentService.js'

export async function insertStudent(req, res) {
    try {
        const student = await StudentService.createStudent(req.body);
        if (student) {
            res.status(201).json(student);
        } else {
            res.status(400).json({ error: 'Failed to create student.' })
        }
    } catch (error) {
        console.error('Error registering student.', error.message);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

export async function getAllStudents(res) {
    try {
        const students = await StudentService.readAllStudents();
        res.status(200).json(students);
    } catch (error) {
        console.error('Error retrieving all students:', error.message)
        res.status(500).json({ error: 'Internal server error.' })
    }
}

export async function getStudentById(req, res) {
    try {
        const student = await StudentService.readStudentById(req.params.id);
        if (student){
            res.status(200).json(student)
        }else{
            res.status(404).json({error: `Student with ID ${req.params.id} not found`});
        }
    } catch (error) {
        console.error('Error when trying to retrieve the student by ID.', error.message)
        res.status(500).json({ error: 'Internal server error.' })
    }
}