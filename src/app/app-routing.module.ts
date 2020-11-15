import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadGuard } from './modules/user/guards/lazy-load.guard';


const routes: Routes = [
  {

    path: 'order',
    canLoad: [LazyLoadGuard],
    loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'example',
    loadChildren: () => import('./modules/example/example.module').then(m => m.ExampleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
