import TasksPage from "./tasks/TasksPage";
import TaskPage from "./tasks/TaskPage";
import HomePage from "./home/HomePage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import logo from "./assets/abstract-logo.png"

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
        <span className="logo">
          <img src={logo} alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/tasks" className="button rounded">
          Tasks
        </NavLink>
      </header>
      <div className="container">
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