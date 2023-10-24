import { Component } from '@angular/core';
import { OnInit  } from '@angular/core';
import { UsersService } from '../services/users/users.service';
@Component({
  selector: 'app-studentsrecord',
  templateUrl: './studentsrecord.component.html',
  styleUrls: ['./studentsrecord.component.css']
})
export class StudentsrecordComponent implements OnInit {
  users: any;
  specificUser: any;
  id: number = 1;
  constructor(private UsersService: UsersService) {}
  ngOnInit(): void {
    this.UsersService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
      console.log(this.users);
    });

  }
}
