import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './pages/cycle/parent/parent.component';
import { DirectivesComponent } from './pages/driectives/directives.component';
import { PipeComponent } from './pages/pipe/pipe.component';


const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule {
}
