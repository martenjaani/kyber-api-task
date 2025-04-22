let students = [];

class Student {
  constructor(firstName, lastName, email, studentNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.studentNumber = studentNumber;
  }

  static addNewStudent(studentData) {
    const {
      firstName, lastName, email, studentNumber,
    } = studentData;
    const student = new Student(firstName, lastName, email, studentNumber);
    students.push(student);
    return student;
  }

  static getAllStudents() {
    return students;
  }

  static findStudentByNumber(studentNumber) {
    return students.find((student) => student.studentNumber === studentNumber || null);
  }

  static findStudentIndexByNumber(studentNumber) {
    return students.findIndex((student) => student.studentNumber === studentNumber || null);
  }

  static updateStudent(studentNumber, updateData) {
    const studentIndex = this.findStudentIndexByNumber(studentNumber);
    if (studentIndex === -1) {
      return null; // Student not found
    }

    const updateKeys = Object.keys(updateData);

    updateKeys.forEach((key) => {
      students[studentIndex][key] = updateData[key];
    });
    return null;
  }

  static deleteStudent(studentNumber) {
    const initialLength = students.length;
    students = students.filter((student) => student.studentNumber !== studentNumber);
    return students.length < initialLength;
  }

  static reset() {
    students = [];
    return students;
  }
}
export default Student;
