import {View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components/native';
import {Colors} from '../../assets/Colors';
import {Fonts} from '../../assets/fonts';
import Text from '../base-text/base-text';

export const PickerTextContainer = styled(View)<{hasError?: boolean}>`
  width: 100%;
  flex-direction: column;
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.hasError ? Colors.red : Colors.gray)};
`;

export const PickerField = styled(RNPickerSelect)``;

export const PickerContainer = styled(View)`
  width: 100%;
  flex-direction: column;
`;

export const LabelContainer = styled(View)`
  width: 100%;
`;

export const Label = styled(Text)``;

export const ErrorContainer = styled(View)`
  margin-top: 6px;
`;

export const ErrorMessage = styled(Text)`
  color: ${Colors.red};
  font-size: 16px;
  font-family: ${Fonts.Regular};
`;
