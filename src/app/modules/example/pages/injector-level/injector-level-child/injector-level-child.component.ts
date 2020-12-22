import { Component, OnInit } from '@angular/core';
import { InjectLevelService } from '../../../services/inject-level.service';

@Component({
  selector: 'app-injector-level-child',
  templateUrl: './injector-level-child.component.html',
  styleUrls: ['./injector-level-child.component.less'],
  providers: [{ provide: InjectLevelService, useValue: new InjectLevelService('我是子组件注入器')}]
})
export class InjectorLevelChildComponent implements OnInit {

  constructor(private injectLevelService: InjectLevelService) { }

  ngOnInit() {
    console.log(this.injectLevelService.level);
  }

}
