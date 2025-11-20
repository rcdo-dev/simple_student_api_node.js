import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    telephone: String,
    email: String,
    course: String,
    ra: String,
});

export default mongoose.model('alunos', studentSchema);