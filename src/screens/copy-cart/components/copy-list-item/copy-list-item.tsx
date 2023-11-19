import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {Copy} from '../../../../entities/copy';
import {CopyCartTranslation} from '../../translations';
import {
  CopyListWrapper,
  CopyItemTitle,
  CopyItemValue,
  CopyItemWrapper,
  CopyItemContentWrapper,
  CopyItemsWrapper,
  RemoveCopyIconWrapper,
  RemoveIcon,
} from './copy-list.item.styles';

type Props = {
  copyList: Copy[];
  onRemoveCopy: (copy: Copy) => void;
};

export default function CopyList({copyList, onRemoveCopy}: Props) {
  const renderListItems = () => {
    return copyList.map(copy => (
      <CopyItemWrapper>
        <CopyItemsWrapper>
          <CopyItemContentWrapper>
            <CopyItemTitle>
              {CopyCartTranslation.itemFields.title}
            </CopyItemTitle>
            <CopyItemValue>{copy.title}</CopyItemValue>
          </CopyItemContentWrapper>
          <CopyItemContentWrapper>
            <CopyItemTitle>
              {CopyCartTranslation.itemFields.edition}
            </CopyItemTitle>
            <CopyItemValue>{copy.edition}</CopyItemValue>
          </CopyItemContentWrapper>
          <CopyItemContentWrapper>
            <CopyItemTitle>
              {CopyCartTranslation.itemFields.copyNumber}
            </CopyItemTitle>
            <CopyItemValue>{`${copy.copyNumber}`}</CopyItemValue>
          </CopyItemContentWrapper>
        </CopyItemsWrapper>
        <RemoveCopyIconWrapper onPress={() => onRemoveCopy(copy)}>
          <RemoveIcon icon={faTrash} />
        </RemoveCopyIconWrapper>
      </CopyItemWrapper>
    ));
  };

  return <CopyListWrapper>{renderListItems()}</CopyListWrapper>;
}
