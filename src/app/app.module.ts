import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './example/cycle/parent/parent.component';
import { ChildComponent } from './example/cycle/child/child.component';
import { FormsModule } from '@angular/forms';
import { FormatterMoneyPipe } from './example/formatter-money.pipe';
import { PipeComponent } from './example/pipe/pipe.component';
import { ClickOutsideDirective } from './example/click-outside.directive';
import { DirectivesComponent } from './example/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    FormatterMoneyPipe,
    PipeComponent,
    ClickOutsideDirective,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
