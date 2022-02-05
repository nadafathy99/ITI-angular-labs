import { Iuser } from './../shared-classes-and-types/iuser';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!:Iuser[]
  errMsg!:string
  constructor(private userService:UserService) { }
  displayUsers(){
    this.userService.getAllUsers().subscribe(
      data=>{
       this.users=data;
      },
      error=>{
        this.errMsg= error.message;
      }
    )
  }
  ngOnInit(): void {
    this.displayUsers();
  }
}
