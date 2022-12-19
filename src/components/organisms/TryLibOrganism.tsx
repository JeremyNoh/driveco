import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

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
      <Text>deded</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  viewbutton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    width: 200,
    marginVertical: 10,
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
