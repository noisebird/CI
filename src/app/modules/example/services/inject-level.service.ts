import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class InjectLevelService {
  level = '';
  constructor(level: string) {
    console.log(111111);
    this.level = level;
  }

  getData() {
    return of({ a: '1111'});
  }
}
