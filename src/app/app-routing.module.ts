import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeComponent } from './example/pipe/pipe.component';


const routes: Routes = [
   {
     path: 'pipe',
     component: PipeComponent
   }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
