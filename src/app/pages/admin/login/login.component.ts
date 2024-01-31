import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj : any = {
    userName :'', 
    password :''

  };
  constructor(private router: Router) {
    
  }

  onLogin(){
   if (this.loginObj.userName == "admin" && this.loginObj.password =="223344"){
    this.router.navigateByUrl('/products')

   } else{
    alert('worng apssword or user name')
   }
  }


}
