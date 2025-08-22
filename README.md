# Task Orbit

Task Orbit is a full-stack task management application built with React, TypeScript, and Vite on the frontend, and Express.js on the backend. It allows users to manage tasks with features like task creation, editing, and status tracking.

## Features

### Frontend
- Built with React and TypeScript.
- Task list with cards for each task.
- Task editing form with validation.
- Mock data for initial tasks.
- Responsive design using `mini.css`.

### Backend
- Built with Express.js and TypeScript.
- REST API for managing tasks.
- CORS configuration for secure communication.

## Project Structure

### Frontend
The frontend code is located in the `src/` directory:
- `tasks/`: Contains components for task management (e.g., `TaskCard`, `TaskForm`, `TaskList`, `TasksPage`).
- `assets/`: Contains static assets like images.
- `App.tsx`: Main application component.
- `main.tsx`: Entry point for the React app.

### Backend
The backend code is located in the `server/src/` directory:
- `routes/`: Defines API routes (e.g., `taskRoutes.ts`).
- `controllers/`: Contains logic for handling API requests (e.g., `taskController.ts`).
- `config/`: Configuration files (e.g., `corsOptions.ts`).
- `server.ts`: Starts the Express server.
- `app.ts`: Configures middleware and routes.

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd task-orbit
2. Install dependencies for both frontend and backend:

    ```bash
    npm install
    cd server
    npm install
### Development
To run the project in development mode:

1. Start the backend server:

    ```bash
    npm run dev --prefix server
2. Start the frontend development server:

    ```bash
    npm run dev
3. Alternatively, you can run both servers concurrently:

    ```bash
    npm run dev:fullstack
The frontend will be available at http://localhost:5173 and the backend at http://localhost:5000 unless specified in an environment file.

### API Endpoints
- GET /routes: Fetch all tasks.
- POST /routes: Create a new task.

### Technologies Used

#### Frontend
- `React`
- `TypeScript`
- `Vite`
- `mini.css`

#### Backend
- `Express.js`
- `TypeScript`
- `CORS`

#### Development Tools
- `ESLint`
- `Nodemon`
- `ts-node`

