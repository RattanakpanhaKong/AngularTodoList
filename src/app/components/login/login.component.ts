import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(){

  }
  ngOnInit(): void {
    
  }

  login(){
    if(this.email.trim().length === 0){
      this.errorMsg = 'Email is required'
    }
    else if(this.password.trim().length === 0){
      this.errorMsg = 'Password is required'
    }
    else{
      this.errorMsg = ''
    }
  }


}
