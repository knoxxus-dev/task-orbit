import { MOCK_TASKS } from "./MockTasks";
import TaskList from "./TaskList";

function TasksPage() {
    return (
        <>
            <h1>Tasks</h1>
            <TaskList tasks={MOCK_TASKS} />
        </>
    );
}

export default TasksPage;