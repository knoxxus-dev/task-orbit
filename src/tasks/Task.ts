export class Task {
    id: number | undefined;
    title: string = "";
    description: string = "";
    assignedTo: string = "";
    dueDate: Date = new Date();
    priority: "low" | "medium" | "high" = "medium";
    status: "todo" | "in-progress" | "done" = "todo";
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
        if ("priority" in initializer) this.priority = initializer.priority || "medium";
        if ("status" in initializer) this.status = initializer.status || "todo";
        if ("isArchived" in initializer) this.isArchived = initializer.isArchived ?? false;
    }
}
