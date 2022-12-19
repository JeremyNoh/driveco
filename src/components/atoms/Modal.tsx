import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  // Modal as ModalLib,
  SafeAreaView,
  Image,
  useWindowDimensions,
} from 'react-native';

import images from '../../assets/images';

interface Props {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: number;
}

const Modal = ({visible, onClose, children, size = 0.8}: Props) => {
  const window = useWindowDimensions();

  return (
    // <ModalLib
    //    animationType={'slide'}
    //   transparent
    //   visible={visible}
    //   onRequestClose={() => {
    //     onClose();
    //   }}>
    <View
      style={[
        styles.backgroundColor,
        styles.modalInWaitingFixReal,
        {
          display: visible ? 'flex' : 'none',
          height: window.height,
          width: window.width,
        },
      ]}>
      <SafeAreaView style={styles.container}>
        <View style={[styles.sizeModal, {flex: size}]}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={images.close}
                resizeMode="contain"
                style={styles.closeButton}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>{children}</View>
        </View>
      </SafeAreaView>
    </View>
    // </ModalLib>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
    backgroundColor: 'rgba(112, 112, 112, 0.56)',
  },
  modalInWaitingFixReal: {
    position: 'absolute',
    zIndex: 99,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sizeModal: {
    backgroundColor: 'white',
    flex: 0.8,
    borderRadius: 26,
    borderColor: 'grey',
    borderWidth: 1,
    marginHorizontal: 20,
    zIndex: 30,
    width: '90%',
  },
  header: {
    flex: 0.1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },
  content: {
    flex: 0.9,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },
  closeButton: {
    height: 30,
    width: 30,
    marginRight: 15,
  },
});

export default Modal;
