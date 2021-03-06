# Build

## Debuggable APK

1. Run the following command: `build:android`
2. Open Android Studio 
3. Open the **BUILD** menu voice of Android Studio
4. Now build the APK or the bundle via **Build bundle(s) / APK(s)**
5. Locate you debuggable APK
5. If you're bundling for iOS:
   1. Make sure that your scheme is in **RELEASE**, to do so, open the **Product** menu voice, then **Scheme** > **Edit scheme** move from `Debug` to `Release`
   2. **Product** > **Archive** then export the bundle as development IPA
   
## Debuggable IPA

1. Run the following command: `build:ios`
2. Open xCode
3. Make sure that your scheme is in **RELEASE**, to do so, open the **Product** menu voice, then **Scheme** > **Edit scheme** move from `Debug` to `Release`
4. **Product** > **Archive** then export the bundle as development IPA
   
**N.B** For IOS the `Debug/Release` schema is needed to tell RN if load the JS from the Node server or the bundle built via CLI.

You can find the reference in the **AppDelegate.m** file:

```
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
```

## Release APK

Just run the release build option via **Build** > **Generate signed bundle / APK**, or via the following command in the root folder: 

```zsh
$ yarn release:apk
```

## Release IPA

Archive the app from xCode
