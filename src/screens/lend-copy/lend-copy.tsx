import {ReactElement, ReactNode, useState} from 'react';
import BaseScreen from '../../core/base-screen/base-screen';
import TextField from '../../core/base-text-field/base-text-field';
import CoreButton from '../../core/button';
import {
  ButtonWrapper,
  IndividualInputWrapper,
  InputGroupWrapper,
  MainWrapper,
} from './lend-copy.styles';
import {LendCopyTranslations} from './translations';
import {UseNavigation} from '../../core/hooks/use-navigation';

type Props = {
  children?: ReactNode;
};

export default function LendCopy({}: Props): ReactElement {
  const {goBack} = UseNavigation();
  const [copyNumber, setCopyNumber] = useState('');

  const onChangeCopyNumber = (text: string, rawText?: string) => {
    setCopyNumber(text);
  };

  const onPressButton = () => {};

  return (
    <BaseScreen
      headerProps={{
        title: LendCopyTranslations.screenTitle,
        onPressLeadingIcon: goBack,
      }}>
      <MainWrapper>
        <InputGroupWrapper>
          <IndividualInputWrapper>
            <TextField
              error={{
                hasError: true,
                message: 'Número de exemplar inválido',
              }}
              placeholder="193434-3"
              onChange={onChangeCopyNumber}
              type="only-numbers"
              value={copyNumber}
              label={LendCopyTranslations.inputs.copyNumber}
            />
          </IndividualInputWrapper>
          <IndividualInputWrapper>
            <TextField
              error={{
                hasError: true,
                message: 'Número de exemplar inválido',
              }}
              placeholder="193434-3"
              onChange={onChangeCopyNumber}
              type="only-numbers"
              value={copyNumber}
              label={LendCopyTranslations.inputs.title}
            />
          </IndividualInputWrapper>
          <IndividualInputWrapper>
            <TextField
              error={{
                hasError: true,
                message: 'Número de exemplar inválido',
              }}
              placeholder="193434-3"
              onChange={onChangeCopyNumber}
              type="only-numbers"
              value={copyNumber}
              label={LendCopyTranslations.inputs.author}
            />
          </IndividualInputWrapper>
          <IndividualInputWrapper>
            <TextField
              error={{
                hasError: true,
                message: 'Número de exemplar inválido',
              }}
              placeholder="193434-3"
              onChange={onChangeCopyNumber}
              type="only-numbers"
              value={copyNumber}
              label={LendCopyTranslations.inputs.publishers}
            />
          </IndividualInputWrapper>
          <IndividualInputWrapper>
            <TextField
              error={{
                hasError: true,
                message: 'Número de exemplar inválido',
              }}
              placeholder="193434-3"
              onChange={onChangeCopyNumber}
              type="only-numbers"
              value={copyNumber}
              label={LendCopyTranslations.inputs.year}
            />
          </IndividualInputWrapper>
          <IndividualInputWrapper>
            <TextField
              error={{
                hasError: true,
                message: 'Número de exemplar inválido',
              }}
              placeholder="193434-3"
              onChange={onChangeCopyNumber}
              type="only-numbers"
              value={copyNumber}
              label={LendCopyTranslations.inputs.feeDate}
            />
          </IndividualInputWrapper>
          <IndividualInputWrapper>
            <TextField
              error={{
                hasError: true,
                message: 'Número de exemplar inválido',
              }}
              placeholder="193434-3"
              onChange={onChangeCopyNumber}
              type="only-numbers"
              value={copyNumber}
              label={LendCopyTranslations.inputs.returnForecast}
            />
          </IndividualInputWrapper>
          <ButtonWrapper>
            <CoreButton
              action={onPressButton}
              text={LendCopyTranslations.button}
            />
          </ButtonWrapper>
        </InputGroupWrapper>
      </MainWrapper>
    </BaseScreen>
  );
}
