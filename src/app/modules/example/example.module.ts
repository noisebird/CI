import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './pages/cycle/parent/parent.component';
import { ChildComponent } from './pages/cycle/child/child.component';
import { FormatterMoneyPipe } from './pipes/formatter-money.pipe';
import { PipeComponent } from './pages/pipe/pipe.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { DirectivesComponent } from './pages/driectives/directives.component';
import { ExampleRoutingModule } from './example-routing.module';
import { InjectorLevelComponent } from './pages/injector-level/injector-level.component';
import { InjectLevelService } from './services/inject-level.service';
import { InjectorLevelChildComponent } from './pages/injector-level/injector-level-child/injector-level-child.component';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    FormatterMoneyPipe,
    PipeComponent,
    ClickOutsideDirective,
    DirectivesComponent,
    InjectorLevelComponent,
    InjectorLevelChildComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ],
  providers: [
    { provide: InjectLevelService, useValue: new InjectLevelService('懒加载模块注入器')}
  ]
})
export class ExampleModule { }
