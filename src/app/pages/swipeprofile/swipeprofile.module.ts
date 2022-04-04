import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwipeprofilePageRoutingModule } from './swipeprofile-routing.module';

import { SwipeprofilePage } from './swipeprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwipeprofilePageRoutingModule
  ],
  declarations: [SwipeprofilePage]
})
export class SwipeprofilePageModule {}
