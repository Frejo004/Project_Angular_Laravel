import { Component } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TASKGROUPSLIST } from '../../../data/taskGroupsList'
import { TaskGroups } from '../../../models/task-groups'

@Component({
  selector: 'app-add-task-group',
  standalone: false,

  templateUrl: './add-task-group.component.html',
  styleUrl: './add-task-group.component.css'
})
export class AddTaskGroupComponent {
  taskGroupForm: FormGroup

  constructor (private fb: FormBuilder) {
    this.taskGroupForm = this.fb.group({
      titreGroupTasks: ['', Validators.required],
      tasks: this.fb.array([]) // Tableau de tâches initialement vide
    })
  }

  get tasks (): FormArray {
    return this.taskGroupForm.get('tasks') as FormArray
  }

  addTask (): void {
    const taskForm = this.fb.group({
      titreTask: ['', Validators.required],
      statut: [false]
    })
    this.tasks.push(taskForm)
  }

  removeTask (index: number): void {
    this.tasks.removeAt(index)
  }

  onSubmit (): void {
    if (this.taskGroupForm.valid) {
      const newGroup: TaskGroups = {
        id: (TASKGROUPSLIST.length + 1).toString(),
        titreGroupTasks: this.taskGroupForm.value.titreGroupTasks,
        task: this.taskGroupForm.value.tasks.map(
          (task: any, index: number) => ({
            id: `${TASKGROUPSLIST.length + 1}.${index + 1}`,
            ...task
          })
        ),
        statut: false
      }

      TASKGROUPSLIST.push(newGroup)
      console.log('Nouveau groupe ajouté :', newGroup)
      console.log('Liste mise à jour :', TASKGROUPSLIST)

      // Réinitialisation du formulaire
      this.taskGroupForm.reset()
      this.tasks.clear()
    }
  }
}
