import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChangeLanguage, NfcTag} from '../molecules';

interface Props {}

export default function TryLibOrganism({}: Props) {
  return (
    <View style={[styles.container]}>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit unde
        harum, laudantium totam quia consectetur itaque magni quos soluta omnis
        facilis nobis asperiores. Veritatis tempore quo, harum velit laboriosam
        illo?
      </Text>

      <ChangeLanguage />

      <View style={styles.slide} />
      {Platform.OS !== 'web' && <NfcTag />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  slide: {
    height: 2,
    width: '100%',
    backgroundColor: '#136397',
    margin: 10,
  },
});
