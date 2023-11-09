import {Text as BaseText} from 'react-native';
import styled from 'styled-components';
import {Fonts} from '../../assets/fonts';
import {Colors} from '../../assets/Colors';

export const TextComponent = styled(BaseText)`
  font-family: ${Fonts.Bold};
  font-size: 20px;
  color: ${Colors.primary_brown};
  margin-top: auto;
`;
