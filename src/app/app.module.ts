import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBsWvkG5KepSjD-5dUNesPUf-fKA3Rz7Tw",
      authDomain: "meuapp-2fdee.firebaseapp.com",
      databaseURL: "https://meuapp-2fdee.firebaseio.com",
      projectId: "meuapp-2fdee",
      storageBucket: "meuapp-2fdee.appspot.com",
      messagingSenderId: "430267955622",
      appId: "1:430267955622:web:e48a8abc0022cc8f"
     }),
    AngularFireDatabaseModule,
   ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
