
# E-Library Management System API

This is a fully functional backend API for an E-Library Management System. It provides endpoints for user authentication, book management, and book borrowing/return operations. This project follows professional coding standards with a clean, maintainable, and scalable architecture.


 - Deploy on Render: https://e-library-management-ljjo.onrender.com
____________________________________________________




## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Setup

1. Clone the Repository

```bash
 https://github.com/VaghaniAxita/E-Library-Management
```

2. Navigate to the Project Directory:

```bash
  cd backend  
```

3. Run the server:
```bash
  nodemon
```




# Routes

### User Authentication Routes
  
  **Register  User**

- Route: POST /api/auth/register
- Description: Register a new user
- Request Body:
```bash
  {
    "name": "abc",
    "email": "abc@gmail.com.com",
    "password": "abc"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
  {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDExOSwiZXhwIjoxNzM3MTIyMTE5fQ.GuvWtrmShK-1v7hOfBmPvL1T74g3BT2varjMnStFEeg"
}
```

**User Login**

- Route: POST /api/auth/login
- Description:Login an existing user
- Request Body:
```bash
 {
  "email": "abc@example.com",
    "password": "abc"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDExOSwiZXhwIjoxNzM3MTIyMTE5fQ.GuvWtrmShK-1v7hOfBmPvL1T74g3BT2varjMnStFEeg"
}
```

###  Book Routes

**Add Book**

- Route:POST /api/books
- Description: 	Add a new book
- Request Body:
```bash
 {
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "genre": "Fiction"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
  {
  "_id": "64a7d15f9b3a9d1a04d5a1c2",
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "genre": "Fiction",
  "isAvailable": true,
  "borrowedBy": null
}
```

**Get All Books**
- Route: GET /api/books
- Description: Get all books in the library 
- Sample Response:
    - Status: 200 OK
    -  Body:
```bash
[
  {
    "_id": "64a7d15f9b3a9d1a04d5a1c2",
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "isAvailable": true,
    "borrowedBy": null
  },
  {
    "_id": "64a7d1629b3a9d1a04d5a1c3",
    "title": "Atomic Habits",
    "author": "James Clear",
    "genre": "Self-Help",
    "isAvailable": true,
    "borrowedBy": null
  }
]

```

**Update Books**
- Route: PUT /api/books/:id
- Description: Update a book's details
- Request Body:
```bash
 {
  "title": "Atomic Habits"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
  "_id": "64a7d1629b3a9d1a04d5a1c3",
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-Help",
  "isAvailable": true,
  "borrowedBy": null
}
```

**Delete Book**
- Route: DELETE /api/expenses/:id
- Description:Delete a Book by ID.
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 {
  "message": "Book deleted successfully"
}
```
**Borrow Book**
- Route: POST /api/borrow/:id/borrow
- Description:Borrow a book
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 {
  "message": "Book borrowed successfully"
}
```

**Return Book**
- Route: POST /api/borrow/:id/return
- Description:Return a book
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 {
  "message": "Book returned successfully"
}
```
  
  
