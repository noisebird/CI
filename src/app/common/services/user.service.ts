import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserInfo } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInfo: UserInfo;
  constructor() {
  }


  fetchUserInfo() {
    const userInfo = {
      username: '张三',
      email: '728212312@qq.com',
      age: 2,
      gender: '男'
    }
    return of(userInfo);
  }

  setUserInfo(userInfo) {
    this.userInfo = userInfo;

  }

  getUserInfo() {
    return this.userInfo;
  }
}
