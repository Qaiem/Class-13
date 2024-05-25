import {Student} from '../models/Student.js'

// // Add Student
export const AddStudent = async (req, res, next) => {
    try {
      const { name, fname, age } = req.body;
  
     
      if (!name || !fname || !age ) {
        const error = new Error();
        error.mymsg = "Missing name or fname or age";
        // error.name = "ValidationError"
        return next(error)
      }
  
      if(age > 100 || age < 0){
        const error = new Error();
        error.mymsg = "Invalid age";
        return next(error)
      }
  
      //   // Intentionally throwing an error
      // throw new Error("Intentional error");
      const newStudent = { name, fname , age }
  
      const newstd = new Student(newStudent);
  
      await newstd.save();
  
      return res.status(201).json(newstd);
  
    } catch (error) {
      next(error)
    }
  }




// Get All Students

export const GetStudents = async (req, res, next) => {
  try {
    const students = await Student.find()

    if(students.length === 0){
      const error = new Error();
      error.mymsg = "Student not found";
      error.status = 404
      return next(error)
    }
    
    return res.status(200).json(students);

  } catch (error) {
    next(error)
  }
}


// Get Single Student
export const GetSingleStudent = async (req, res, next) => {

  try {
    const id = req.params.id
    const student = await Student.findById(id);
    if (!student) {
      const error = new Error();
      error.mymsg = "Student not found";
      error.status = 404
      return next(error)
    }
  
    return res.status(200).json(student);
  } catch (error) {
    next(error)
  }
}

// Update a Student
export const UpdateStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, fname, age } = req.body;

    const studentToUpdate = {name, fname, age }
    const student = await Student.findOneAndUpdate({ _id: id }, studentToUpdate , { new: true });

    // const student = await Student.findOneAndUpdate({_id:id}, { name, fname, age })
    
    if (!student) {
      const error = new Error();
      error.mymsg = "Student not found";
      error.status = 404
      return next(error)
    }
    
    return res.status(200).json(student);
} catch (error) {
    next(error)
}
}

// Delete a Student
export const DeleteStudent = async (req, res, next) => {
  try {
    const id = req.params.id
    const student = await Student.findOneAndDelete({ _id: id });

    if (!student) {
      const error = new Error();
      error.mymsg = "Student not found";
      error.status = 404
      return next(error)
    }
  
    return res.status(200).json({ msg: "Student deleted" });
  } catch (error) {
    next(error)
  }
}