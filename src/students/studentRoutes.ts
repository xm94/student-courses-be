import { Router } from 'express';
import { getCoursesByStudentId, getStudentById, getStudents } from './studentService';

const router = Router();

router.get('/',getStudents);
router.get('/courses/:id',getCoursesByStudentId);
router.get('/:id',getStudentById);

export default router;