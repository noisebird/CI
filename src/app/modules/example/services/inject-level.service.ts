import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectLevelService {

  level = '';
  constructor(level: string) {
    this.level = level;
  }
}
