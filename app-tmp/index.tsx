import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  // const cameraPermission = Camera.getCameraPermissionStatus()

  // if(cameraPermission !== "granted") {
  //   const newCameraPermission = await Camera.requestCameraPermission()

  //   if(newCameraPermission !== "granted") {
  //     return (
  //       <View
  //         style={{
  //           flex: 1,
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <Text>Could not get permission!</Text>
  //       </View>
  //     );
  //   }
  // }

  // const devices = Camera.getAvailableCameraDevices()
  // const device = getCameraDevice(devices, 'back')

  // if (device == null) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Text>Could not get camera!</Text>
  //     </View>
  //   );
  // }
  
  // return (
    // <Camera
    //   style={StyleSheet.absoluteFill}
    //   device={device}
    //   isActive={true}
    // />
  // )

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Done!</Text>
    </View>
  );
}
