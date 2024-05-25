Initialize project
1) Create server
2) Connect with MongoDB
3) Create schema
4) Create CRUD operations
5) Implement validation
6) Implement error handling
7) Deploy API
8) API Documentation











# Assignment

## CRUD Operations for Student & Staff

In this class, we implemented CRUD operations for the Student entity. Below are the details of the Student entity.

### Student Properties:
1. name: String
2. fname: String
3. age: Number

### API Endpoints:
- POST /student: Create a new student.
- GET /student: List all students.
- GET /student:id: Retrieve a specific student by ID.
- PUT /student/:id: Update a student's details.
- DELETE /student/:id: Delete a student.

## Now you need to create CRUD Operations for Teacher, Class and Subject with Proper Error Handling

### Attributes
#### Teacher Properties:
1. name: String, required, min, max
2. email: String, unique, required
3. department: String, required

#### Class Properties:
1. className: String
2. roomNumber: String

#### Subject Properties:
1. subjectName: String

### API Endpoints:

#### Teacher Endpoints:
1. POST /teacher: Create a new teacher.
2. GET /teacher: List all teachers.
3. GET /teacher/:id: Retrieve a specific teacher by ID.
4. PUT /teacher/:id: Update a teacher's details.
5. DELETE /teacher/:id: Delete a teacher.

#### Class Endpoints:
1. POST /classe: Create a new class.
2. GET /classe: List all classe.
3. GET /classe/:id: Retrieve a specific class by ID.
4. PUT /classe/:id: Update a class's details.
5. DELETE /classe/:id: Delete a class.

#### Subject Endpoints:
1. POST /subject: Create a new subject.
2. GET /subject: List all subjects.
3. GET /subject:id: Retrieve a specific subject by ID.
4. PUT /subject/:id: Update a subject's details.
5. DELETE /subject/:id: Delete a subject.



<!-- Separete private, collobarator, txt file, github URL, loom, link 5min -->