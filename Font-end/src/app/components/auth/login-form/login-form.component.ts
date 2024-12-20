import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-login-form',
  standalone: false,

  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {


  constructor( private userservice: UserService) {}

  email!: string
  password!: string
  errormsg: string = ""
  
  onSubmit(data: NgForm) {
    if(data.valid) {
      this.email = data.value.email
      this.password = data.value.password
      const userLogin = this.userservice.login(this.email , this.password)

      if (userLogin) {
        this.errormsg = "Vous êtes connecté"
      }
      else{
        this.errormsg = "Email ou mot de passe incorrecte"
      }
    }
  }

  ngOnInit(): void { }
}
