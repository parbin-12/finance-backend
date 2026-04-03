# 💰 Finance Dashboard Backend

## 📌 Overview

This project is a backend system for a finance dashboard that allows users to manage financial records and view insights based on their roles.

It demonstrates backend design, API development, role-based access control, and data aggregation for analytics.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (for password hashing)

---

## 📁 Project Structure

```
finance-backend/
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── app.js
├── server.js
├── .env
└── README.md
```

---

Authentication

* JWT-based authentication is used
* Users must log in to access protected routes
* Passwords are securely hashed using bcrypt

---

👤 Roles & Permissions

| Role    | Permissions                                        |
| ------- | -------------------------------------------------- |
| Viewer  | Can only view dashboard data                       |
| Analyst | Can view records and analytics                     |
| Admin   | Full access (create, update, delete, manage users) |

---
## Financial Records

Each record contains:

* Amount
* Type 
* Category
* Date
* Notes

## Features:

* Create records (Admin only)
* View records (Analyst, Admin)
* Update records (Admin only)
* Delete records (Admin only)
* Filter records by category, type, and date

---

##  Dashboard APIs

The backend provides aggregated data for dashboards:

* Total income
* Total expenses
* Net balance
* Category-wise totals
* Monthly trends

---

## 🛡️ Access Control

Role-based access control is implemented using middleware to restrict API access based on user roles.

---

## ⚠️ Validation & Error Handling

* Input validation is implemented
* Proper HTTP status codes are returned
* Centralized error handling ensures consistent responses

---

## 🚀 How to Run the Project

### 1. Clone the repository

```
git clone <your-repo-link>
cd finance-backend
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```
MONGO_URI=mongodb+srv://py532138_db_user:5d8UtNkneM62PG2v@cluster0.ecmfuco.mongodb.net/financeDB?appName=Cluster0
JWT_SECRET=helloKey123
PORT=3000
```

### 4. Run the server

```
nodemon server.js
```

Server will run at:

```
http://localhost:3000
```

---

##  API Testing

You can test APIs using tools like Postman or Thunder Client.

---

## 📌 Assumptions

* Only admins can modify financial records
* Authentication is required for protected routes
* MongoDB is used for data persistence

---

##  Future Improvements

* Pagination for large datasets
* Search functionality
* Rate limiting
* Unit and integration testing
* API documentation (Swagger)

---

##  Design Decisions

* Modular folder structure for scalability
* Middleware-based role validation
* MongoDB aggregation pipelines for analytics
* Separation of concerns (routes, controllers, models)

---
