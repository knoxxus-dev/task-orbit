import TasksPage from "./components/tasks/TasksPage";
import TaskPage from "./components/tasks/TaskPage";
import HomePage from "./components/home/HomePage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import logo from "./assets/abstract-logo.png"

function App() {
  return (
    <BrowserRouter>
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 backdrop-blur-md shadow px-6 py-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" width="49" height="49" className="rounded-md" />
          <nav className="flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 font-medium transition ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 font-medium transition ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}`
              }
            >
              Tasks
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="p-6 bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TaskPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;