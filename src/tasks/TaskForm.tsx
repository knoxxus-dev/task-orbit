function TaskForm() {
    return (
        <form className="input-group vertical">
            <label htmlFor="title">Task Title</label>
            <input
                type="text"
                name="title"
                placeholder="Enter task title"
                required
            />

            <label htmlFor="description">Task Description</label>
            <textarea
                name="description"
                placeholder="Enter task description"
            />

            <label htmlFor="assignedTo">Assigned To</label>
            <input
                type="text"
                name="assignedTo"
                placeholder="Enter assignee's name"
            />

            <label htmlFor="dueDate">Due Date</label>
            <input
                type="date"
                name="dueDate"
            />

            <label htmlFor="priority">Priority</label>
            <select name="priority" defaultValue="medium">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <label htmlFor="status">Status</label>
            <select name="status" defaultValue="todo">
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>

            <label htmlFor="isArchived">Archived?</label>
            <input
                type="checkbox"
                name="isArchived"
            />

            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span />
                <button type="button" className="bordered medium">
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default TaskForm;