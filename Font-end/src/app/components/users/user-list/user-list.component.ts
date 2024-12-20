import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  data: any;

  constructor(private userService: UserService, private http: HttpClient) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
    
    this.getData();
  }


  getData() {
    this.http.get('http://127.0.0.1:8000/api/users')
      .subscribe(response => {
        this.data = response;
      });
  }

  deletePost(id: number) {
    this.http.delete(`http://127.0.0.1:8000/api/users/${id}`)
      .subscribe(response => {
        console.log('Post supprimé avec succès');
      });
  }
}