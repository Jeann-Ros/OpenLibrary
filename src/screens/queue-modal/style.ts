import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const ContainerModal = styled(View)`
  width: 80%;
  height: 40%;
  background-color: #F2F2F2;
  margin: auto;
  border-radius: 15px;
  display: flex;
  border: 2px #733119;
`;

export const TOpp = styled(TouchableOpacity)`
  background-color: #733119;
  width: 45%;
  height: 40%;
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  border-radius: 25px;
  margin:auto;                    
`;

export const TOpp2 = styled(TouchableOpacity)`
  background-color: #F2F2F2;
  width: 45%;
  height: 40%;
  display: flex;
  align-items: center;
  padding-bottom: 7px;
  border-radius: 25px;
  border: 4px #733119;
  margin:auto;                    
`;

export const Botoes = styled(View)`
  width: 100%;
  height: 50%;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  
`
export const Faixa = styled(View)`
  width: 95%;
  height: 5%;
  background-color: #733119;
  border-radius: 15px;
  margin:auto
`