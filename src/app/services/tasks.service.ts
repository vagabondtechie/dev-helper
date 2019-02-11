import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable()
export class TasksService {
    constructor() {
        if (!localStorage.getItem('id')) {
            localStorage.setItem('id', '1');
        }
    }

    getNewId(): number {
        const id = parseInt(localStorage.getItem('id'), 10);
        localStorage.setItem('id', (id + 1).toString());
        return id;
    }

    persistTasks(tasks: Task[]) {
        if (localStorage) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    loadTasks(): Task[] {
        if (localStorage && localStorage.getItem('tasks')) {
            return JSON.parse(localStorage.getItem('tasks'));
        }
        return [];
    }
}
