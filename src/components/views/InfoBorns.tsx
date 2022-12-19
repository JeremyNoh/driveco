import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import {Born} from '../../types/borns';
// import openMap from 'react-native-open-maps';

interface Props {
  onClose: () => void;
  born: Born | undefined;
  onActionOnBorn: (id: string) => void;
}

export default function InfoBorns({onClose, born, onActionOnBorn}: Props) {
  const openGps = () => {
    console.log(
      `open Maps from ${born?.coordonneesXY[1]},${born?.coordonneesXY[0]}`,
    );

    // openMap({
    //   zoom: 10,
    //   travelType: 'drive',
    //   query: `${born?.coordonneesXY[1]},${born?.coordonneesXY[0]}`,
    // });
  };

  return (
    <View style={styles.layout}>
      <View style={styles.viewCloseIcon}>
        <TouchableOpacity onPress={onClose}>
          <Image style={styles.closeIcon} source={images.close} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>
          {born && born.nom_enseigne} / {born && born.nom_station}
        </Text>
        <Text style={styles.title}>
          {' '}
          Gratuit : {born?.gratuit ? 'Oui' : 'Non'}
        </Text>
      </View>

      <TouchableOpacity style={styles.letsDriveView} onPress={openGps}>
        <Text style={styles.letsDriveText}>Me rendre à cette borne</Text>
        <Image style={styles.mapsIcon} source={images.maps} />
      </TouchableOpacity>

      <View style={styles.actionView}>
        <TouchableOpacity
          style={styles.buttonInfo}
          onPress={() => onActionOnBorn(born?.id_pdc_itinerance!)}>
          <Text> Voir plus d'info sur cette borne</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(1, 29, 47, 0.90)',
    bottom: 0,
    left: 0,
    height: 250,
    width: '100%',
  },
  viewCloseIcon: {
    alignItems: 'flex-end',
    marginBottom: 5,
    marginRight: 4,
  },
  closeIcon: {
    height: 40,
    width: 40,
    tintColor: '#fff',
  },
  viewTitle: {
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  letsDriveView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#4498d5',
    width: 250,
    borderRadius: 12,
    alignSelf: 'center',
    marginVertical: 5,
  },
  letsDriveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mapsIcon: {
    height: 40,
    width: 40,
  },
  actionView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  buttonInfo: {
    height: 55,
    paddingHorizontal: 10,

    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
