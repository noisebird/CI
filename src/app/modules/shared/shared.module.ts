import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAComponent } from './components/shared-a/shared-a.component';
import { SharedAService } from './services/shared-a.service';



@NgModule({
  declarations: [SharedAComponent],
  imports: [
    CommonModule
  ],
  exports: [SharedAComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SharedAService]
    };
  }


  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
