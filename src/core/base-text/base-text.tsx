import {TextStyle} from 'react-native';
import {TextComponent} from './base-text.styles';

type Props = {
  children: string;
  style?: TextStyle;
};

export default function Text({children, style}: Props) {
  return <TextComponent style={style}>{children}</TextComponent>;
}
