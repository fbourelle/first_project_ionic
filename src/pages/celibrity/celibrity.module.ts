import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CelibrityPage } from './celibrity';


@NgModule({
  declarations: [
    CelibrityPage,
  ],
  imports: [
    IonicPageModule.forChild(CelibrityPage),
  ],
})
export class CelibrityPageModule {}
