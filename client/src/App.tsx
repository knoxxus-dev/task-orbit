import TasksPage from "./components/tasks/TasksPage";
import TaskPage from "./components/tasks/TaskPage";
import HomePage from "./components/home/HomePage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import logo from "./assets/abstract-logo.png"

function App() {
  return (
    <BrowserRouter>
      <header>
        <img src={logo} alt="logo" width="49" height="99" />
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/tasks">
          Tasks
        </NavLink>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TaskPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;