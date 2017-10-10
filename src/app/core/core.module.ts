import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutService } from '@app/core/services';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: '@app/views/root-view/root-view.module#RootViewModule'
      }
    ])
  ],
  providers: [CheckoutService],
  exports: [CommonModule, RouterModule]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('Import CoreModule only in AppModule');
    }
  }
}
