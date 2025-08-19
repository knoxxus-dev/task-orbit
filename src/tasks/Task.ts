export default class Task {
    id: number | undefined;
    title: string = "";
    description: string = "";
    assignedTo: string = "";
    dueDate: Date = new Date();
    priority: "Low" | "Medium" | "High" = "Medium";
    status: "To Do" | "In-progress" | "Done" = "To Do";
    isArchived: boolean = false;

    get isNew(): boolean {
        return this.id === undefined;
    }

    constructor(initializer?: Partial<Task>) {
        if (!initializer) return;

        if ("id" in initializer) this.id = initializer.id;
        if ("title" in initializer) this.title = initializer.title || "";
        if ("description" in initializer) this.description = initializer.description || "";
        if ("assignedTo" in initializer) this.assignedTo = initializer.assignedTo || "";
        if ("dueDate" in initializer) this.dueDate = new Date(initializer.dueDate as any);
        if ("priority" in initializer) this.priority = initializer.priority || "Medium";
        if ("status" in initializer) this.status = initializer.status || "To Do";
        if ("isArchived" in initializer) this.isArchived = initializer.isArchived ?? false;
    }
}
