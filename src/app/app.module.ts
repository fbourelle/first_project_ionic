
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CelibrityPage } from '../pages/celibrity/celibrity';
import { DestinationPage } from '../pages/destination/destination';
import { PersonnagePage } from '../pages/personnage/personnage';
import { AddpersonnagePage } from '../pages/addpersonnage/addpersonnage';
import { CustomBarComponent } from '../components/custom-bar/custom-bar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CelibrityPage,
    DestinationPage,
    PersonnagePage,
    AddpersonnagePage,
    CustomBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CelibrityPage,
    DestinationPage,
    PersonnagePage,
    AddpersonnagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
