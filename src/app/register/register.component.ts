import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  register(registerData:NgForm){
    console.log(registerData.value);
   }

  isMatched(password:NgModel,confirm:NgModel){
    return password.value!=confirm.value;
   }

}
