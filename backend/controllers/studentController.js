// eslint-disable-next-line import/extensions
import Student from '../models/student.js';

function createStudent(req, res) {
  try {
    const {
      firstName, lastName, email, studentNumber,
    } = req.body;

    if (!firstName || !lastName || !email || !studentNumber) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if student already exists
    const existingStudent = Student.findStudentByNumber(studentNumber);
    if (existingStudent) {
      return res.status(400).json({ error: 'Student already exists with this student number' });
    }
    const student = Student.addNewStudent(req.body);
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

function updateStudent(req, res) {
  try {
    const { studentNumber } = req.params;
    const updateData = req.body;

    Student.updateStudent(studentNumber, updateData);
    const student = Student.findStudentByNumber(studentNumber);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

function getStudents(req, res) {
  try {
    const students = Student.getAllStudents();
    return res.status(200).json(students);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
function getStudent(req, res) {
  try {
    const { studentNumber } = req.params;
    const student = Student.findStudentByNumber(studentNumber);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

function deleteStudent(req, res) {
  try {
    const { studentNumber } = req.params;
    const deleted = Student.deleteStudent(studentNumber);
    if (!deleted) {
      return res.status(404).json({ error: 'Student not found' });
    }
    return res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

function resetStudents(req, res) {
  const students = Student.reset();
  return res.status(200).json(students);
}

export default {
  createStudent,
  updateStudent,
  getStudents,
  getStudent,
  deleteStudent,
  resetStudents,
};
