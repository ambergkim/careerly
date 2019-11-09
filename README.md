# Careerly

## Start
- Clone
- npm i

## Android Setup
- https://medium.com/pvtl/react-native-android-development-on-mac-ef7481f65e47

## Android APK Build
Create Bundle
```
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
```
Create apk
```
cd android
./gradlew assembleDebug
./gradlew assembleRelease
```

## Mason
update apk?
```
mason deploy --push apk com.careerly 1 development
```

push to device?
```
mason deploy config careerly 1 development
```