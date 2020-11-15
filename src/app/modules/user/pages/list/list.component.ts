import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../guards/leave.guard';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit, CanComponentDeactivate {

  constructor(
    private userService: UserService,
    @Inject('UserService1') private userService1: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    console.log(this.userService.getUserInfo(), 'user info ......');
    console.log(this.userService1.getUserInfo(), 'user info1 ......');
  }

  jumpToDetail() {
    const id = 12;
    const name = '张三';
    // this.router.navigate(['/user/detail', id], { queryParams: { name }});
    this.router.navigateByUrl(`/user/detail/${id}?name=${name}`);
  }

  canDeactivate() {
    return true;
  }


}
