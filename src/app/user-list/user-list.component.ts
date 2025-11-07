import { Component, inject } from '@angular/core';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  private http = inject(HttpClient);
  users: User[] = [];

  constructor() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
      });
  }

}
