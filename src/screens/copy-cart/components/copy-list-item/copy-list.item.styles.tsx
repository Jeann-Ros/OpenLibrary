import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../../../assets/Colors';
import Text from '../../../../core/base-text/base-text';

export const CopyListWrapper = styled(View)`
  margin-bottom: 40px;
`;

export const CopyItemWrapper = styled(View)`
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${Colors.gray};
  justify-content: space-between;
  flex-direction: row;
`;

export const CopyItemsWrapper = styled(View)`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const CopyItemTitle = styled(Text)``;

export const CopyItemValue = styled(Text)`
  color: ${Colors.gray};
  margin-left: 6px;
`;

export const CopyItemContentWrapper = styled(View)`
  flex-direction: row;
  margin-top: 6px;

  align-items: center;
`;

export const RemoveCopyIconWrapper = styled(TouchableOpacity)``;

export const RemoveIcon = styled(FontAwesomeIcon).attrs({
  size: 32,
  color: Colors.red,
})``;
