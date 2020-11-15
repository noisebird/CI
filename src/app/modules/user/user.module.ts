import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
