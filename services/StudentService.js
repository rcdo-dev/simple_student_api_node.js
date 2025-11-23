import Student from "../models/StudentModel.js"

export async function createStudent(studentData) {
    try {
        const student = await Student.create(studentData);
        return student;
    } catch (error) {
        throw new Error('Error while trying to register the student.');
    }
}

export async function readAllStudents() {
    try {
        const students = await Student.find();
        return students;
    } catch (error) {
        throw new Error('Error while trying to retrieve all students.');
    }
}

export async function readStudentById(studentId) {
    try {
        const student = await Student.findById(studentId);
        return student;
    } catch (error) {
        throw new Error('Student not found.');
    }
}

export async function updateStudent(studentId, studentData) {
    try {
        const student = await Student.findByIdAndUpdate(studentId, studentData, { new: true });
        if (!student) throw new Error('Student not found.');
        return student;
    } catch (error) {
        throw new Error('Error while trying to update student data.');
    }
}

export async function deleteStudent(studentId) {
    try {
        const student = await Student.findByIdAndDelete(studentId);
        if (!student) throw new Error('Student not found.');
        return student;
    } catch (error) {
        throw new Error('Error while trying to delete student data.');
    }
}