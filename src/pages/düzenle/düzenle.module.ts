import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DüzenlePage } from './düzenle';

@NgModule({
  declarations: [
    DüzenlePage,
  ],
  imports: [
    IonicPageModule.forChild(DüzenlePage),
  ],
})
export class DüzenlePageModule {}
