import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable()
export  class TasksService {
    constructor() { }

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
