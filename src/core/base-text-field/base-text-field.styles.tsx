import {View, ViewProps} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../../assets/Colors';
import Text from '../base-text/base-text';
import {Fonts} from '../../assets/fonts';

export const TextFieldMainWrapper = styled(View)`
  width: 100%;
  flex-direction: column;
`;

export const TextFieldWrapper = styled(View)<{hasError?: boolean}>`
  width: 100%;
  flex-direction: column;
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.hasError ? Colors.red : Colors.gray)};
`;

export const LabelWrapper = styled(View)`
  width: 100%;
`;

export const Label = styled(Text)``;

export const ErrorWrapper = styled(View)`
margin-top: 6px;
`;

export const ErrorMessage = styled(Text)`
  color: ${Colors.red};
  font-size: 16px;
  font-family: ${Fonts.Regular};
`;
