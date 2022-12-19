// import backIcon from './backIcon.svg';

export type ImageType = 'born' | 'freeBorn' | 'maps' | 'close' | 'driveco';

const images: {[key in ImageType]: any} = {
  born: require('./born.png'),
  freeBorn: require('./freeBorn.png'),
  maps: require('./maps.png'),
  close: require('./close.png'),
  driveco: require('./driveco.png'),
};

export default images;
