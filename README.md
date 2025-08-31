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
The frontend code is located in the `client/src/` directory:
- `tasks/`: Contains components for task management (e.g., `TaskCard`, `TaskForm`, `TaskList`, `TasksPage`).
- `home/`: Contains the homepage component.
- `utils/`: Contains utility functions like API calls.
- `assets/`: Contains static assets like images.
- `App.tsx`: Main application component.
- `main.tsx`: Entry point for the React app.

### Backend
The backend code is located in the `server/src/` directory:
- `routes/`: Defines API routes (e.g., `taskRoutes.ts`).
- `controllers/`: Contains logic for handling API requests (e.g., `taskController.ts`).
- `models/`: Contains data models (e.g., `Task.ts`, `MockTasks.ts`).
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
    npm install --workspaces
### Development
To run the project in development mode:

1. Start the backend server:

    ```bash
    npm run dev --workspace server
2. Start the frontend development server:

    ```bash
    npm run dev --workspace client
### API Endpoints

#### Task Endpoints
- **GET** `/api/`: Fetch all tasks with pagination support ([_page](http://_vscodecontentref_/1) and [_limit](http://_vscodecontentref_/2) query parameters).
- **GET** `/api/:id`: Fetch a task by its ID.
- **POST** `/api/`: Create a new task.
- **PUT** `/api/:id`: Update an existing task by its ID.

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

