import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public themeColor = '#16872e';

  logoStyle = {
    width: '50px'
  }

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    this.auth.logout();
    this.router.navigateByUrl('');
  }

}
