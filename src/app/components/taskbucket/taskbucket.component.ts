import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
    selector: 'app-taskbucket',
    styleUrls: ['./taskbucket.component.css'],
    templateUrl: './taskbucket.component.html'
})
export class TaskbucketComponent implements OnInit {
    task: Task;
    tags: string;
    tasks: Task[];

    constructor(private tasksService: TasksService) {

    }

    ngOnInit() {
        this.task = this.getEmptyTask();
        this.tags = null;
        this.tasks = this.tasksService.loadTasks();
    }

    createTask() {
        if (!this.task.description) {
            alert('Please add task description.');
            return;
        }
        if (!this.task.deadline) {
            alert('Please select a deadline.');
            return;
        }
        if (this.tags) {
            this.task.tags = this.tags.split(',').map(function(tag) { return tag.trim(); });
        }

        this.task.id = this.tasksService.getNewId();
        this.task.createdOn = new Date();
        this.task.deadline = new Date(this.task.deadline);

        this.tasks.unshift(this.task);
        this.tasksService.persistTasks(this.tasks);
        this.task = this.getEmptyTask();
        this.tags = null;
        // TODO Show some success message to the user
    }

    private getEmptyTask(): Task {
        return {
            description: null,
            deadline: null
        };
    }
}
