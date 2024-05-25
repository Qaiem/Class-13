import express from 'express'
import { AddStudent, GetStudents, GetSingleStudent, UpdateStudent, DeleteStudent } from '../controllers/student.js'
const router = express.Router()

// Add a Student
router.post('/', AddStudent )

// Get All Students
router.get('/', GetStudents)

// Get Single Student
router.get('/:id', GetSingleStudent )

// Update Student
router.put('/:id', UpdateStudent)

// // Delete Student
router.delete('/:id', DeleteStudent)

export default router