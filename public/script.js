const API_URL = "http://localhost:5000/api/students";

// ====================== READ ======================
async function loadStudents() {
  try {
    const response = await fetch(API_URL);
    const students = await response.json();

    const tbody = document.getElementById("studentTableBody");
    tbody.innerHTML = "";

    students.forEach(student => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td>${student.year}</td>
        <td>${student.email}</td>
        <td>
          <button onclick="editStudent('${student._id}', '${student.name}', '${student.course}', ${student.year}, '${student.email}')">Edit</button>
          <button onclick="deleteStudent('${student._id}')">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Error loading students:", error);
  }
}

// ====================== CREATE & UPDATE ======================
document.getElementById("studentForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const id = document.getElementById("studentId").value;
  const student = {
    name: document.getElementById("name").value,
    course: document.getElementById("course").value,
    year: document.getElementById("year").value,
    email: document.getElementById("email").value
  };

  try {
    if (id) {
      // UPDATE
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
      });
    } else {
      // CREATE
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
      });
    }

    // Clear form
    document.getElementById("studentForm").reset();
    document.getElementById("studentId").value = "";
    document.getElementById("submitBtn").textContent = "Add Student";
    document.getElementById("cancelBtn").style.display = "none";

    loadStudents(); // i-refresh ang table
  } catch (error) {
    console.error("Error saving student:", error);
  }
});

// ====================== EDIT ======================
function editStudent(id, name, course, year, email) {
  document.getElementById("studentId").value = id;
  document.getElementById("name").value = name;
  document.getElementById("course").value = course;
  document.getElementById("year").value = year;
  document.getElementById("email").value = email;

  document.getElementById("submitBtn").textContent = "Update Student";
  document.getElementById("cancelBtn").style.display = "inline-block";
}

// ====================== CANCEL EDIT ======================
document.getElementById("cancelBtn").addEventListener("click", function () {
  document.getElementById("studentForm").reset();
  document.getElementById("studentId").value = "";
  document.getElementById("submitBtn").textContent = "Add Student";
  this.style.display = "none";
});

// ====================== DELETE ======================
async function deleteStudent(id) {
  if (confirm("Are you sure you want to delete this student?")) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });
      loadStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  }
}

// ====================== LOAD DATA PAG BINUKSAN ANG PAGE ======================
loadStudents();