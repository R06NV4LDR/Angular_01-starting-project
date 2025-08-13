import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // Alternative for ?
  // Instead telling TS that a value might not be defined initially,
  // we can use ? or union type features like in the example below
  
  // @Input() name: string | undefined;
  
  @Input() name?: string;
}
