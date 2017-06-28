# Welcome to the ionic2-fcm-notification !
## Steps to run the project
create an fcm project with the same package name as yours, your package name can be found inside _config.xml_ as < widget id=..... >, download google-services.json from fcm firebase project.

1. Add  > google-services.json into the root directory 
2. ### Install the Cordova and Ionic Native plugins:
   * > $ ionic cordova plugin add cordova-plugin-fcm
   * > $ npm install --save @ionic-native/fcm
3. Add this plugin to your app's module
4. ### Build the app
   > ionic cordova build android --prod --release
5.   ### generate private key
   > keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
6. ### Sign The file and enter your keyphrase(password)to sign
   > jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks platforms/android/build/outputs/apk/android-release-unsigned.apk my-alias
7. ### create signed apk (replace Zipalign path with your android sdk zipalign path)
   > ~/Library/Android/sdk/build-tools/25.0.3/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk HelloWorld.apk
8. Verify If apk is signed(same as zipalign path, find path of apksigner path)
   >  ~/Library/Android/sdk/build-tools/25.0.3/apksigner verify HelloWorld.apk
   
## Check these files for the code implementation
  1.  > [app.module.ts fcm module import](https://github.com/AKamanjha/ionic2-fcm-notification/blob/master/src/app/app.module.ts#L14) and [app.module.ts intialize inside provider](https://github.com/AKamanjha/ionic2-fcm-notification/blob/master/src/app/app.module.ts#L39)
  2.  > [app.component.ts fcm module import](https://github.com/AKamanjha/ionic2-fcm-notification/blob/master/src/app/app.component.ts#L5) , [app.component.ts constructor initialization](https://github.com/AKamanjha/ionic2-fcm-notification/blob/master/src/app/app.component.ts#L15) and [app.component.ts fcm code](https://github.com/AKamanjha/ionic2-fcm-notification/blob/master/src/app/app.component.ts#L24-L40) 
  
  


