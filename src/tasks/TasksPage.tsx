import { MOCK_TASKS } from "./MockTasks";
import TaskList from "./TaskList";
import Task from "./Task";

function TasksPage() {

    const saveTask = (task: Task) => {
        console.log("Saving task: ", task);
    }

    return (
        <>
            <h1>Tasks</h1>
            <TaskList
                tasks={MOCK_TASKS}
                onSave={saveTask}
            />
        </>
    );
}

export default TasksPage;