Installation Guide

npm install

After "npm install", edit file: ./node_modules/react-native-gesture-handler/android/build.gradle

```
android {
    compileSdkVersion safeExtGet("compileSdkVersion", 28)
    buildToolsVersion safeExtGet("buildToolsVersion", '28.0.3')

    defaultConfig {
        minSdkVersion safeExtGet('minSdkVersion', 23)
        targetSdkVersion safeExtGet('targetSdkVersion', 28)
        versionCode 1
        versionName "1.0"
        ndk {
            abiFilters "armeabi-v7a", "x86"
        }
    }

    // Include "lib/" as sources, unfortunetely react-native link can't handle
    // setting up alternative gradle modules. We still have "lib" defined as a
    // standalone gradle module just to be used in AndroidNativeExample
    sourceSets {
        main.java.srcDirs += 'lib/src/main/java'
    }
}

dependencies {
    //noinspection GradleDynamicVersion
    implementation 'com.facebook.react:react-native:+'
}

```


Run command:

```react-native run-android --variant=arDebug```

or

```react-native run-android --variant=arDebug```
