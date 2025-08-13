import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2025-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2025-10-15',
    },
    {
      id: 't1',
      userId: 'u1',
      title: 'Do laundry',
      summary: 'Wash and dry clothes',
      dueDate: '2025-08-13',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    //....
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

onStartAddTask() {
  this.isAddingTask = true;
  // Logic to open the new task form
}

onCancelAddTask() {
  this.isAddingTask = false;
}

  // Alternative for ?
  // Instead telling TS that a value might not be defined initially,
  // we can use ? or union type features like in the example below

  // @Input() name: string | undefined;
}
