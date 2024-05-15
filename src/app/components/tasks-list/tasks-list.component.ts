import { Component, Input } from '@angular/core';
@Component({
selector: 'app-tasks-list',
templateUrl: './tasks-list.component.html'
})
export class TasksListComponent {
@Input() tasks: string[] = [];
}