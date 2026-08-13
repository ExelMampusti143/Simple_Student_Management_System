# Simple Student Management System

A simple full-stack web application for managing student records using **Create, Read, Update, and Delete (CRUD)** operations.

This project was created as a portfolio project to practice and demonstrate basic full-stack web development.

## Features

* Add new student records
* View all students
* Edit student information
* Delete student records
* Store student data in MongoDB
* REST API for student management
* Simple and responsive user interface

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

## Project Structure

```text
Simple_Student_Management_System/
├── models/
│   └── Student.js
├── routes/
│   └── students.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## API Endpoints

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/api/students`     | Get all students  |
| POST   | `/api/students`     | Add a new student |
| PUT    | `/api/students/:id` | Update a student  |
| DELETE | `/api/students/:id` | Delete a student  |

## Installation

### 1. Clone the repository

Open Command Prompt or a terminal and run:

```bash
git clone https://github.com/ExelMampusti143/Simple_Student_Management_System.git
cd Simple_Student_Management_System
```

> If you rename the project folder on your computer, use the new folder name when running the `cd` command.

For example, if you rename the folder to `Simple_Student_CRUD`:

```bash
cd Simple_Student_CRUD
```

You can also navigate to the project folder manually in Command Prompt:

```text
cd <your-project-folder-path>
```

### 2. Install dependencies

Install the required Node.js packages:

```bash
npm install
```

This will automatically create the `node_modules` folder based on the dependencies listed in `package.json`.

### 3. Create the environment file

Create a `.env` file in the project root directory and add:

```env
MONGO_URI=mongodb://localhost:27017/studentsdb
```

The `.env` file is not included in the repository. Use `.env.example` as a reference.

### 4. Make sure MongoDB is running

Make sure MongoDB is installed and running on your computer.

This project uses a local MongoDB database named:

```text
studentsdb
```

### 5. Start the application

For development:

```bash
npm run dev
```

Or for normal start:

```bash
npm start
```

If you renamed the project folder, make sure you are inside the correct project directory before running the command.

### 6. Open the application

Open your web browser and go to:

```text
http://localhost:5000
```

The URL remains the same even if you rename the project folder because the application runs on port `5000`.

## How It Works

The application follows a basic full-stack architecture:

```text
Frontend
HTML + CSS + JavaScript
        │
        │ Fetch API
        ▼
Backend
Node.js + Express.js
        │
        │ Mongoose
        ▼
Database
MongoDB
```

The frontend communicates with the Express.js backend through API requests. The backend handles the CRUD operations and uses Mongoose to interact with MongoDB.

## Screenshot

Add a screenshot of the application here:

```markdown
![Simple Student Management System](student-management-system.png)
```

## Purpose of the Project

This project was created to practice and demonstrate:

* CRUD operations
* REST API development
* Node.js and Express.js
* MongoDB database integration
* Mongoose
* Frontend-to-backend communication
* Basic full-stack web development

## Future Improvements

* Add search and filtering
* Add form validation
* Add pagination
* Improve UI/UX
* Add authentication
* Add better error handling
* Deploy the application online

## Author

**Exel Mampusti**

GitHub: https://github.com/ExelMampusti143
