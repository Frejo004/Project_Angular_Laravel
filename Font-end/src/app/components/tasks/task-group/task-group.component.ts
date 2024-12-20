import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskGroups } from '../../../models/task-groups';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task-group',
  standalone: false,

  templateUrl: './task-group.component.html',
  styleUrl: './task-group.component.css'
})
export class TaskGroupComponent {
  @Input() tasksGroup!: TaskGroups;

  @Output() newTask = new EventEmitter<Task>();

  sendToParent(task: Task){
    // console.log(task);
    this.newTask.emit(task)
  }
}
