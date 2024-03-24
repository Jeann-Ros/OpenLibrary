import {ScrollView, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../assets/Colors';

export const CheckButton = styled(TouchableOpacity)<{checked: boolean}>`
  flex-direction: row;
  background-color: ${Props => (Props.checked ? '#dddcdb' : Colors.white)};
  margin-top: 15px;
  padding: 5px;
  border-radius: 10px;
`;

export const CheckButtonContainer = styled(ScrollView)`
  width: 100%;
  height: 100px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: '#000000';
`;
