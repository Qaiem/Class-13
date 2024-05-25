import mongoose from 'mongoose'


// schema
const Schema = mongoose.Schema;
const StudentSchema  = new Schema(
  {
    name: {
      type: String,
      required : [true, 'Name is required'],
      minlength: [3, 'Name should be at least 3 characters long'],
      maxlength: [50, 'Name should not exceed 50 characters'],
      unique: [true, 'Name is unique']
    },
    fname: String,
    age: Number
  }
);

export const Student = mongoose.model("Student", StudentSchema);























// // schema
// const Schema = mongoose.Schema;
// const StudentSchema  = new Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Name is required'],
//       minlength: [2, 'Name should be at least 2 characters long'],
//       maxlength: [50, 'Name should not exceed 50 characters'],
//       unique: [true, 'Name is unique']
//   },
//     fname: String,
//     age: Number
//   }
// );

// export const Student = mongoose.model("Student", StudentSchema);