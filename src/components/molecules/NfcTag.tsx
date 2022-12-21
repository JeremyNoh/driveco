import React from 'react';
import {Alert, Platform} from 'react-native';

import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import {Button} from '../atoms';

Platform.OS !== 'web' && NfcManager.start();

export default function NfcTag() {
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

  return <Button onPress={readNdef} title="Scan a Tag" />;
}
