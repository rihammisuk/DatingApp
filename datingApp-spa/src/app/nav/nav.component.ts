import { error } from '@angular/compiler/src/util';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authServide: AuthService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  login(){
    this.authServide.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log('Failed to login');
    });
  }

  // tslint:disable-next-line:typedef
  loggedIn(){
    const token = localStorage.getItem('token');
    return !! token;
  }

    // tslint:disable-next-line:typedef
    logout(){
      localStorage.removeItem('token');
      console.log('Logged Out');
    }



}
