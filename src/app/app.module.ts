import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './common/services/user.service';
import { InjectLevelService } from './modules/example/services/inject-level.service';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { SharedModule } from './modules/shared/shared.module';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule.forRoot()
  ],
  providers: [
    { provide: UserService, useClass: UserService },
    // {provide: UserService, useValue: new UserService()},
    // {
    //   provide: UserService, useFactory: () => {
    //     if (environment.production) {
    //       return new UserService();
    //     } else {
    //       return {};
    //     }
    //   }
    // },
    { provide: 'UserService1', useExisting: UserService },

   { provide: InjectLevelService, useValue: new InjectLevelService('根组件注入器') }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
