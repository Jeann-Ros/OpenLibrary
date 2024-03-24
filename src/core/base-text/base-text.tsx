import {TextStyle} from 'react-native';
import {TextComponent} from './base-text.styles';

type Props = {
  children: string;
  style?: TextStyle;
  numOfLines?: number;
};

export default function Text({children, style, numOfLines}: Props) {
  return (
    <TextComponent numberOfLines={numOfLines} style={style}>
      {children}
    </TextComponent>
  );
}
