import { AuthService } from './../../_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from './../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../_models/user';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;
  // @HostListener('windows:beforeunload', ['$event'])
  // // tslint:disable-next-line:typedef
  // unloadNotification($event: any){
  //   if (this.editForm.dirty) {
  //     $event.returnValue = true;
  //   }
  // }
  constructor( private route: ActivatedRoute, private alertify: AlertifyService,
    // tslint:disable-next-line:align
    private userService: UserService, private authService: AuthService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user =  data.user;
    });
  }

  // tslint:disable-next-line:typedef
  updateUser(){
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user)
    .subscribe(next => {
      this.alertify.success('Profile Updated Successfully');
      this.editForm.reset(this.user);
    }, error => {
      this.alertify.error(error);
    });
  }

}
