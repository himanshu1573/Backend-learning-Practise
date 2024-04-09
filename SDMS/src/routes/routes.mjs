import express from 'express';
const router=express.Router();
import { deleteStudent, findStudent, updateStudent } from '../controller/StudentController.mjs';
import { createStudent } from '../controller/StudentController.mjs';

router.get('/students',findStudent)
router.post('/addstudent',createStudent);
router.delete('/delete',deleteStudent);
router.post('/updateStudent',updateStudent)

export default router;