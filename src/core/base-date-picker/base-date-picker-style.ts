import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styled from 'styled-components/native';
import {Colors} from '../../assets/Colors';
import {Fonts} from '../../assets/fonts';
import Text from '../base-text/base-text';

export const DatePickerTextContainer = styled(View)<{hasError?: boolean}>`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const DatePickerField = styled(DatePicker)`
  background-color: rgb(242, 242, 242);
`;

export const DatePickerContainer = styled(View)`
  width: 100%;
  align-items: center;
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
