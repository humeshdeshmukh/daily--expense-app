# daily--expense-app

/*Daily Expenses Sharing Application

Table of Contents

Introduction
Setup and Installation
API Endpoints
Data Models
Validation Logic
Error Handling
Performance Optimization
Testing
Introduction

This is a backend service for a daily-expenses sharing application. The application allows users to add expenses and split them based on three different methods: exact amounts, percentages, and equal splits. The service manages user details, validates inputs, and generates downloadable balance sheets.

Setup and Installation

To set up and run the project, follow these steps:

Clone the repository: git clone https://github.com/your-username/daily-expenses-sharing-app.git
Install dependencies: npm install
Start the server: npm start
Open a web browser and navigate to http://localhost:3000
API Endpoints

The following API endpoints are available:

User Endpoints
Create user: POST /users
Retrieve user details: GET /users/:id
Expense Endpoints
Add expense: POST /expenses
Retrieve individual user expenses: GET /expenses/:userId
Retrieve overall expenses: GET /expenses
Download balance sheet: GET /balance-sheet
Data Models

The following data models are used:

User
email: string
name: string
mobileNumber: string
Expense
id: string
userId: string
amount: number
splitMethod: string (exact, percentage, or equal)
splitDetails: object (contains split details for each user)
Validation Logic

The following validation logic is implemented:

User input validation: validates user input for email, name, and mobile number
Expense validation: validates expense amount and split method
Percentage validation: ensures percentages add up to 100%
Error Handling

Error handling is implemented using try-catch blocks and error middleware.

Performance Optimization

Performance optimization is implemented using indexing and caching.

Testing

Unit and integration tests are implemented using Jest and Supertest.

Code

The code is written in Node.js and Express.js, and is organized into the following folders:

models: contains data models
controllers: contains API endpoint logic
services: contains business logic
utils: contains utility functions
tests: contains unit and integration tests
I have also attached my resume and portfolio for your review.

Thank you for considering my submission. I look forward to hearing from you soon.

Best regards, [Humesh Deshmukh]
resume:https://drive.google.com/file/d/1uKeJ1yox0gTY3Q2rdJh1Ps6jRlrORY6T/view?usp=drivesdk
Portfolio*/