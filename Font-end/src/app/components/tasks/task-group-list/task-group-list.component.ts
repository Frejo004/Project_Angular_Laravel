import { Component } from '@angular/core';
import { TaskGroups } from '../../../models/task-groups';
import { TASKGROUPSLIST } from '../../../data/taskGroupsList';
import { Task } from '../../../models/task';
import { TaskGroupsListService } from '../../../service/task-groups-list.service';

@Component({
  selector: 'app-task-group-list',
  standalone: false,

  templateUrl: './task-group-list.component.html',
  styleUrl: './task-group-list.component.css'
})
export class TaskGroupListComponent {
  tasksGroupList: TaskGroups[] = [];

  constructor(private taskGroupsListService: TaskGroupsListService){
  }

  ngOnInit(): void{
    this.tasksGroupList = this.taskGroupsListService.getTasksGroupList();
  }
  addTasksInGroups(task: Task){
    // this.tasksGroupList.push(taskGroup);
    this.tasksGroupList.forEach(tasksGroup => {
      if(tasksGroup.id == task.id){
        tasksGroup.task.push({
          id: tasksGroup.id + tasksGroup.task.length + 1,
          titreTask: task.titreTask,
          statut: task.statut
        })
      }
    });
    console.log('OK!');
  }
}
