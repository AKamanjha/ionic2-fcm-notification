import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private fcm: FCM) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      

      fcm.getToken().then(token => {
        alert("Token : "+ token);
      })

      fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          alert('received in background')
        } else {
          alert("Received in foreground");
        };
      })

      fcm.onTokenRefresh().subscribe(token => {
        alert("token Refresh : "+token);
      })

      //fcm.unsubscribeFromTopic('marketing');
    });
  }
}
