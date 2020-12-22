import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadGuard } from './modules/user/guards/lazy-load.guard';
import { PreloadStrategyService } from './common/services/preload-stragegy.service';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'example'
  },
  {

    path: 'order',
    data: { preload: true },
    // canLoad: [LazyLoadGuard],
    loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'example',
    data: { preload: true },
    loadChildren: () => import('./modules/example/example.module').then(m => m.ExampleModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
