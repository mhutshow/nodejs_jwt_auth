# JWT Token Auth System

This project is a JWT token-based authentication system built using Node.js and Express. It provides a simple authentication flow using JSON Web Tokens (JWT) to protect certain routes. The system utilizes bcrypt for password hashing and validation, express-validator for request validation, and nodemon for automatic server restarts during development.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mhutshow/nodejs_jwt_auth.git
```

2. Install the dependencies:

```bash
cd repo-name
npm install
```

3. Start the server:

```bash
npm run start
```

The server will start running on `http://localhost:5000`.

## Usage

The following endpoints are available:

- `POST /auth/signup`: Register a new user. Requires a valid email and a password with a minimum length of 6 characters.

- `POST /auth/login`: Login with existing user credentials. Requires a valid email and password.

- `GET /auth/all`: Get a list of all users (for testing purposes only).

- `GET /post/public`: Get a list of public posts.

- `GET /post/private`: Get a list of private posts (requires authentication).

### Request Headers

For routes that require authentication, make sure to include the following header in your requests:

```
x-auth-token: <JWT_TOKEN>
```

Replace `<JWT_TOKEN>` with the actual token received from the login/signup response.

## Mock Database

The project uses a mock database (`db.js`) for tutorial purposes. In a real-world scenario, you should connect it to an actual database to persist data securely.

## Tutorial Session

This project was developed during a tutorial session with junior developers to provide an introduction to JWT token-based authentication. It serves as a starting point for implementing authentication in Node.js applications.
