import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './pages/cycle/parent/parent.component';
import { ChildComponent } from './pages/cycle/child/child.component';
import { FormatterMoneyPipe } from './pipes/formatter-money.pipe';
import { PipeComponent } from './pages/pipe/pipe.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { DirectivesComponent } from './pages/driectives/directives.component';
import { ExampleRoutingModule } from './example-routing.module';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    FormatterMoneyPipe,
    PipeComponent,
    ClickOutsideDirective,
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
