import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor(private userService: UserService, @Inject('UserService1') private userService1: UserService) { }

  ngOnInit() {
    console.log(this.userService.getUserInfo(), 'user info ......');
    console.log(this.userService1.getUserInfo(), 'user info1 ......');
  }

}
