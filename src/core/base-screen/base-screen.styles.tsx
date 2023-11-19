import {SafeAreaView, ScrollView, View} from 'react-native';
import styled from 'styled-components';

export const MainWrapper = styled(SafeAreaView)`
  flex: 1;
  height: 100%;
`;

export const MainChildrenWrapper = styled(View)``;

export const ChildrenWrapper = styled(View)`
  padding: 16px;
  flex: 1;
`;

export const ChildrenScrollView = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  height: 100%;
`;
