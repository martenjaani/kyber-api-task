import express from 'express';
// eslint-disable-next-line import/extensions
import studentController from './controllers/studentController.js';

// Use express server
const app = express();

app.use(express.json());

// Routes
app.post('/student', studentController.createStudent);
app.patch('/student/:studentNumber', studentController.updateStudent);
app.get('/student', studentController.getStudents);
app.get('/student/:studentNumber', studentController.getStudent);
app.delete('/student/:studentNumber', studentController.deleteStudent);
app.delete('/student/', studentController.resetStudents);

export default app;
