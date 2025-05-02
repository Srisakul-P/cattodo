# Cattodo
This project is an api for register, login, create todo, and query all todo from current user

Installation:
1. Clone the repository or download source code from this repositories:
```bash
git clone https://github.com/Srisakul-P/cattodo.git
```
2. install node js if you haven't already from this website https://nodejs.org/en

3. download and install MongoDB from this website if you haven't already https://www.mongodb.com/try/download/community

4. go to terminal, cd to project folder location

5. run this command to install dependencies
```bash
npm install
```

6. open .env in project folder and adjust sensitive data to match your need

7. run the application with this command
```bash
npm start
```

Usage:
Once the application is up and running, by default would be running in port 5000, you can access it by sending request to the follow url:
1. Register a new user
Method: POST

URL: /register

Body:
{
  "username": "yourUsername",
  "password": "yourPassword"
}
Auth Token: Not required

2. Login
Method: POST

URL: /login

Body:
{
  "username": "yourUsername",
  "password": "yourPassword"
}
Auth Token: Not required

3. Create a new todo
Method: POST

URL: /todos

Body:
{
  "message": "Your task here",
  "date": "2025-05-02"
}
Auth Token: Required

4. Get all todos
Method: GET

URL: /todos

Auth Token: Required

JWT is used for protected routes.
Include the token in the Authorization header as:
Bearer <your_token>