import React from 'react';
import { Button, Linking, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, useCameraPermission } from 'react-native-vision-camera';

export default function TabThreeScreen() {
  const { hasPermission, requestPermission } = useCameraPermission()

  if(hasPermission) {
    const devices = Camera.getAvailableCameraDevices()

    if(devices != null && devices.length) {
      const formats = []
      let key = 0;
      for(const device of devices) {
        for(const format of device.formats) {
          formats.push(<Text key={key++}>{device.name}: {device.isMultiCam}, {device.position} - {format.maxFps} @ {format.videoWidth} x {format.videoHeight}</Text>);
        }
      }

      return (
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ScrollView>
            <Text>Devices:</Text>
            {formats}
          </ScrollView>
        </SafeAreaView>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Could not get camera!</Text>
        </View>
      );
    }
  } else {
    requestPermission();

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Access not granted!</Text>
        <Button onPress={Linking.openSettings} title="Open Settings" />
        <Button onPress={requestPermission} title="Retry" />
      </View>
    );
  }
}