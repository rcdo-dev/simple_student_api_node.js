import * as StudentService from '../services/StudentService.js'

export async function insertStudent(req, res) {
    try {
        const student = await StudentService.createStudent(req.body);
        if (student) {
            res.status(201).json(student);
        }
    } catch (error) {

        // 400: Bad Request (Erro de validação do Mongoose).
        if (error.name === 'ValidationError') {
            console.warn('Validation Error registering student:', error.message);
            return res.status(400).json({
                error: 'Invalid data provided.',
                details: error.message
            });
        }

        console.error('Error registering student.', error.message);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

export async function getAllStudents(req, res) {
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
        if (student) {
            res.status(200).json(student)
        } else {
            res.status(404).json({ error: `Student with ID ${req.params.id} not found` });
        }
    } catch (error) {
        console.error('Error when trying to retrieve the student by ID.', error.message)
        res.status(500).json({ error: 'Internal server error.' })
    }
}

export async function modifyStudent(req, res) {
    try {
        const student = await StudentService.updateStudent(req.params.id, req.body);
        if (student) {
            res.status(200).json(student)
        }
    } catch (error) {

        // 400: Bad Request (Erro de validação do Mongoose).
        if (error.name === 'ValidationError') {
            console.warn(`Validation Error for ID ${req.params.id}:`, error.message);
            return res.status(400).json({
                error: 'Invalid data provided for update.',
                details: error.message
            });
        }

        // 404: Not Found.
        if (error.name === 'NotFoundError') {
            console.warn(`Resource Not Found: Student ID ${req.params.id}`);
            return res.status(404).json({ error: error.message });
        }

        console.error(`Internal Server Error updating ID ${req.params.id}:`, error.message);
        res.status(500).json({ error: 'Internal server error.' })
    }
}

export async function removeStudent(req, res) {
    try {
        await StudentService.deleteStudent(req.params.id);

        //204 No Content é o código HTTP ideal para DELETE.
        return res.status(204).end();
    } catch (error) {

        // 404: Not Found.
        if (error.name === 'NotFoundError') {
            console.warn(`Attempted to delete non-existent student ID: ${req.params.id}`);
            return res.status(404).json({ error: error.message });
        }

        console.error(`Error deleting student ID ${req.params.id}:`, error.message);
        res.status(500).json({ error: 'Internal server error.' });
    }
}