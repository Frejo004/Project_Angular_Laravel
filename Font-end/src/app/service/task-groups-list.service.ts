import { Injectable } from '@angular/core';
import { TaskGroups } from '../models/task-groups';
import { TASKGROUPSLIST } from '../data/taskGroupsList';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupsListService {

  constructor() { }
  private tasksGroupList: TaskGroups[] = TASKGROUPSLIST;

  /**
   *
   * @returns TasksGroups[]
   */
  public getTasksGroupList = (): TaskGroups[] => this.tasksGroupList;
  }

  
