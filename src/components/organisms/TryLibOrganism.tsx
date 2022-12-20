import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {}

export default function TryLibOrganism({}: Props) {
  const {t, i18n} = useTranslation();

  const changeTraduction = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <View style={[styles.container]}>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit unde
        harum, laudantium totam quia consectetur itaque magni quos soluta omnis
        facilis nobis asperiores. Veritatis tempore quo, harum velit laboriosam
        illo?
      </Text>
      <Text>{t('INFO_APP.NAME')}</Text>

      <TouchableOpacity onPress={changeTraduction}>
        <Text>Changer de Langue</Text>
      </TouchableOpacity>
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
