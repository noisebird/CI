import { Component, OnInit } from '@angular/core';
import { UserService } from './common/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-demo';

  constructor(private userService: UserService) {}

  async ngOnInit() {
    const userInfo = await this.userService.fetchUserInfo().toPromise();
    this.userService.setUserInfo(userInfo);
    console.log(this.userService.getUserInfo());
  }


}
