import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwipeprofilePage } from './swipeprofile.page';

const routes: Routes = [
  {
    path: '',
    component: SwipeprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwipeprofilePageRoutingModule {}
