import * as StudentService from '../services/StudentService.js'

export async function insertStudent(req, res) {
    try {
        const student = await StudentService.createStudent(req.body);
        if(student){
            res.status(201).json(student);
        }else{
            res.status(400).json({error:'Failed to create student.'})
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal server error.' });
    }
}