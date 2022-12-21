import React, {useEffect, useState} from 'react';
import {Alert, Platform, StyleSheet, Text} from 'react-native';

import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import {Button} from '../atoms';

export default function NfcTag() {
  const [hasNFC, setHasNFC] = useState<boolean | null>(null);
  useEffect(() => {
    const checkIsSupported = async () => {
      const deviceIsSupported = await NfcManager.isSupported();

      setHasNFC(deviceIsSupported);
      if (deviceIsSupported) {
        await NfcManager.start();
      }
    };

    Platform.OS === 'web' ? setHasNFC(false) : checkIsSupported();
  }, []);

  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
      Alert.alert(`Voici l'id du Badge : ${tag?.id}`);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }
  if (hasNFC === null) {
    return <Text style={styles.text}>Loading</Text>;
  } else if (!hasNFC) {
    return <Text style={styles.text}>NFC pas Compatible</Text>;
  }
  return <Button onPress={readNdef} title="Scan a Tag" />;
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
