import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DUMMY_USERS } from '../../assets/users/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User =  {
//     id: string;
//     name: string;
//     avatar: string;
//   }

interface  User {
    id: string;
    name: string;
    avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  // Decorator | The old way to create inputs
  //-------------------------------------------
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  // New approach
  //-------------------------------------------
  //select = output<string>();

  // Signals | The new way to create inputs
  //-------------------------------------------
  //avatar = input.required<string>();
  //name = input.required<string>();

  // imagePath = computed(() => {
  //     return 'assets/users/' + this.avatar();
  // })

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
