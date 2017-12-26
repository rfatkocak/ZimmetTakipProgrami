import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EklePage } from './ekle';

@NgModule({
  declarations: [
    EklePage,
  ],
  imports: [
    IonicPageModule.forChild(EklePage),
  ],
})
export class EklePageModule {}
