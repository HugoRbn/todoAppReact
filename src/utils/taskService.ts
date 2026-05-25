import type {Task} from "../data/task.ts";

export const createTask = (taskName: string): Task => {
    return {
        id: Math.random().toString(36),
        name: taskName,
        done: false,
        priority: 0,
    };
}