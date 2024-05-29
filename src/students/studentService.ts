import { Request, Response } from 'express';

import pool from '../db';

export const getStudents = async (req: Request, res: Response) => {
    let students: any[] = [];

    let table = "enrolled_students";

    const dbResult = await pool.query(`SELECT * FROM ${table}`);

    students = dbResult.rows;
    return res.status(200).json(students);

}


export const getStudentById = async (req: Request, res: Response) => {
    let id = req.params.id;
    let students: any[] = [];

    let table = "enrolled_students";

    const dbResult = await pool.query(`SELECT * FROM ${table} WHERE id=${id}`);

    students = dbResult.rows;
    if(students.length==0){
        return res.status(404).send("Student not found");
    }
    return res.status(200).json(students[0]);

}


export const getCoursesByStudentId = async (req: Request, res: Response) => {
    let id = req.params.id;
    let students: any[] = [];

    let table = "course_enrollments";

    const dbResult = await pool.query(`SELECT * FROM ${table} WHERE student_id=${id}`);

    students = dbResult.rows;
    return res.status(200).json(students[0]);

}
