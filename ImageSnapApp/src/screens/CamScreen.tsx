import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { Linking } from 'react-native'; // To open CamScreen settings

const CamScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [showCamera, setShowCamera] = useState(false); // State to control camera visibility
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      if (status !== 'authorized') {
        showPermissionAlert(); // Show alert if permission is not granted
      }
      setHasPermission(status === 'authorized');
    })();
  }, []);

  const showPermissionAlert = () => {
    Alert.alert(
      'Camera Permission Required',
      'This app requires access to your camera. Please grant permission in settings.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Open Settings',
          onPress: () => Linking.openSettings(), // Open app settings
        },
      ]
    );
  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>No camera permission granted.</Text>
        <Button title="Try Again" onPress={() => showPermissionAlert()} />
      </View>
    );
  }

  if (!device) {
    return (
      <View style={styles.container}>
        <Text>No camera device found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!showCamera ? (
        // Show the button when the camera is not visible
        <Button title="Open Camera" onPress={() => setShowCamera(true)} />
      ) : (
        // Show the camera when the button is pressed
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      )}
    </View>
  );
};

export default CamScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
