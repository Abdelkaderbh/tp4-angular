import { Component, Input } from '@angular/core';
import { Task } from '../../constants/tasks.interface';
@Component({
selector: 'app-tasks-list',
templateUrl: './tasks-list.component.html'
})
export class TasksListComponent {
@Input() tasks: string[] = [];
    constructor() { }
    ngOnInit(): void {
    }
    removeTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
    this.tasks.splice(taskIndex, 1);
    }
    }
    toggleCompleted(task: Task) {
    task.completed = !task.completed;
    }
}