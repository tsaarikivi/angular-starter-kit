import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RootViewComponent } from './root-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RootViewComponent
      }
    ])
  ],
  declarations: [RootViewComponent]
})
export class RootViewModule {}
