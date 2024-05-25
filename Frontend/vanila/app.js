const baseURL = 'http://localhost:3000/api'; // Update this to your actual backend URL

const AddStudent = async () => {
    const submitButton = document.getElementById('addstd');
    submitButton.textContent = 'Submitting...'; 
    submitButton.disabled = true; 

    const name = document.getElementById('name').value;
    const fname = document.getElementById('fname').value;
    const age = parseInt(document.getElementById('age').value);

    const student = {name, fname, age};

    const reqConfig = {
        url: `${baseURL}/students`,
        option: {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        }
    }

    try {
        const res = await fetch(reqConfig.url, reqConfig.option);
        const response = await res.json();
    
        if (!res.ok) {
            console.log('Student not added:', response.message);
            ToastShow(`Student not added because ${response.message}`, 'error');
            return;
        } 

        console.log('Student added:', response);
        ToastShow("Student added", 'success');
        FetchStudents(); // Refresh the student list

    } catch (error) {
        console.log(error);
    } finally {
        submitButton.textContent = 'Submit'; 
        submitButton.disabled = false; 
    }
}

const FetchStudents = async () => {
    const studentListDiv = document.getElementById('studentList');
    studentListDiv.innerHTML = 'Loading...';

    try {
        const res = await fetch(`${baseURL}/students`);
        const students = await res.json();

        if (!res.ok) {
            console.log('Error fetching students:', students.message);
            ToastShow(`Error fetching students: ${students.message}`, 'error');
            return;
        }

        // Clear the list before adding new items
        studentListDiv.innerHTML = '';

        if (students.length === 0) {
            studentListDiv.innerHTML = 'No students found.';
        } else {
            students.forEach(student => {
                const studentDiv = document.createElement('div');
                studentDiv.textContent = `${student.name} (${student.age}) - ${student.class}`;
                studentListDiv.appendChild(studentDiv);
            });
        }

    } catch (error) {
        console.log(error);
        ToastShow('An error occurred while fetching students.', 'error');
    }
}

const ToastShow = (msg, msgType) => {
    let backgroundColor;
    if (msgType === 'success') {
        backgroundColor = "linear-gradient(to right, #00b09b, #96c93d)"; // Green gradient for success
    } else if (msgType === 'error') {
        backgroundColor = "linear-gradient(to right, #e74c3c, #c0392b)"; // Red gradient for error
    } else {
        backgroundColor = "linear-gradient(to right, #3498db, #2980b9)"; // Default blue gradient
    }
    Toastify({
        text: msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: backgroundColor,
        },
    }).showToast();
}

document.getElementById('addstd').addEventListener('click', AddStudent);
document.addEventListener('DOMContentLoaded', FetchStudents);
