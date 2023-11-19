import {useAtom} from 'jotai';
import BaseScreen from '../../core/base-screen/base-screen';
import {UseNavigation} from '../../core/hooks/use-navigation';
import {Copy} from '../../entities/copy';
import {feeCartAtom} from '../../states/app-states';
import CopyList from './components/copy-list-item/copy-list-item';
import {
  AddCopyButton,
  ButtonWrapper,
  CopyListWrapper,
  FinishButton,
  MainWrapper,
} from './copy-cart.styles';
import {CopyCartTranslation} from './translations';

export default function CopyCart() {
  const navigation = UseNavigation();

  const [copyCart, setCopyCart] = useAtom(feeCartAtom);

  const onRemoveCopy = (selectedCopy: Copy) => {
    const filteredCopyCart = copyCart.filter(
      copy => copy.copyNumber !== selectedCopy.copyNumber,
    );

    setCopyCart(filteredCopyCart);
  };

  const onAddCopy = () => {
    if (copyCart.length < 3) navigation.pop();
  };

  return (
    <BaseScreen
      hasScrollView
      headerProps={{
        title: CopyCartTranslation.screenTitle,
        showLeadingIcon: true,
        onPressLeadingIcon: () => {
          navigation.goBack();
        },
      }}>
      <MainWrapper>
        <CopyListWrapper>
          <CopyList onRemoveCopy={onRemoveCopy} copyList={copyCart} />
        </CopyListWrapper>
      </MainWrapper>
      <ButtonWrapper>
        <AddCopyButton
          action={onAddCopy}
          text={CopyCartTranslation.buttons.addCart}
        />

        <FinishButton
          action={() => {}}
          text={CopyCartTranslation.buttons.finish}
        />
      </ButtonWrapper>
    </BaseScreen>
  );
}
