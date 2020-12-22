import { Component, OnInit } from '@angular/core';
import { UserService } from './common/services/user.service';
import { SharedAService } from './modules/shared/services/shared-a.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-demo';

  constructor(private userService: UserService, private sharedAService: SharedAService) {}

  async ngOnInit() {
    const userInfo = await this.userService.fetchUserInfo().toPromise();
    this.userService.setUserInfo(userInfo);
    console.log(this.userService.getUserInfo());
    console.log(this.sharedAService.sharedValue);
    this.sharedAService.sharedValue = '更改shared service value';
    console.log(this.sharedAService.sharedValue);
  }


}
