import { Component, EventEmitter, Output } from '@angular/core';

import { type Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
this.cancel.emit();
  }
  onAddTask() {
    // Logic to add a new task
      }
}
