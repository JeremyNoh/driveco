import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Button} from '../atoms';

export default function ChangeLanguage() {
  const {t, i18n} = useTranslation();

  const changeTraduction = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <View>
      <Text style={styles.title}>
        {t('INFO_APP.CURRENT_LANG')}
        {i18n.language === 'en' ? t('INFO_APP.EN') : t('INFO_APP.FR')}
      </Text>

      <Button onPress={changeTraduction} title={t('INFO_APP.CHANGE_LANG')} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
