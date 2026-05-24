export interface Task {
    id: string;
    name: string;
    done: boolean;
    priority: number;
}

export type Priority = "high" | "low" | "medium";

export type Filter = "all" | "active" | "completed";