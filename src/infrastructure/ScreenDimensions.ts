import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class ScreenDimensions {
  static height = (percent: number): number => (height * percent) / 100;
  static totalSize = (num: number): number =>
    (Math.sqrt(height * height + width * width) * num) / 100;
  static width = (percent: number): number => (width * percent) / 100;
}
