import { Router } from 'express';
import { getCoursesByStudentId, getStudentById, getStudents } from './studentService';

const router = Router();

router.get('/',getStudents);
router.get('/:id',getStudentById);
router.get('/:id/courses',getCoursesByStudentId);

export default router;