import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  public userDetails$: Observable<User>
  user = new User();
  isAuth: boolean = false;

  constructor(private router: Router, private userService: UserService) {
    this.userDetails$ = this.userService.userDetails$;
  }

  getHomeLink() {
    let link = ['/home'];
    this.userDetails$.subscribe((user) => {
      if (user.authStatus == 'AUTH') {
        link = ['/dashboard'];
      }
    }).unsubscribe();
    return link
  }

}
