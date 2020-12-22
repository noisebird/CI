import { Component, OnInit } from '@angular/core';
import { InjectLevelService } from '../../services/inject-level.service';

@Component({
  selector: 'app-injector-level',
  templateUrl: './injector-level.component.html',
  styleUrls: ['./injector-level.component.less'],
  // providers: [{ provide: InjectLevelService, useValue: new InjectLevelService('父组件注入器')}]
})
export class InjectorLevelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
