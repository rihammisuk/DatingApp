import { error } from '@angular/compiler/src/util';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from './../_services/alertify.service';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UserService } from './../_services/user.service';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// tslint:disable-next-line:eofline
@Injectable()

export class MemberDetailResolver implements Resolve<User> {
    constructor(private userService: UserService,
                private router: Router, private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<User>{
        // tslint:disable-next-line:no-string-literal
        return this.userService.getUser(route.params['id']).pipe(
            // tslint:disable-next-line:no-shadowed-variable
            catchError(error => {
                this.alertify.error('Problem retriving data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
