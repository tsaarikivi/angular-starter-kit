import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FirebaseModule } from '@app/core/modules/firebase/firebase.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: '@app/views/root-view/root-view.module#RootViewModule'
      }
    ]),
    FirebaseModule
  ],
  providers: [],
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
