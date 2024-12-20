import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-form-add-task',
  standalone: false,

  templateUrl: './form-add-task.component.html',
  styleUrl: './form-add-task.component.css'
})
export class FormAddTaskComponent {
  newTask: string = '';
  @Output() sendNewTask = new EventEmitter<Task>();
  @Input() idTaskGroups!: string;

  sendNewTaskEmit() {
    if (this.newTask.trim() !== "") {
      this.sendNewTask.emit(
        {
          id: this.idTaskGroups,
          titreTask: this.newTask,
          statut: false
        }
      )
      // console.log(this.newTask.trim());
      this.newTask = ''
    }
  }
}
