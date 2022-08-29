import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  userModel = new User()

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    this.auth.register(this.userModel).subscribe((response:any)=>{
      console.log(response);
    })
  }

}
