import {ReactElement, ReactNode, useState} from 'react';
import BaseScreen from '../../core/base-screen/base-screen';
import TextField from '../../core/base-text-field/base-text-field';
import {MainWrapper} from './lend-copy.styles';
import {LendCopyTranslations} from './translations';

type Props = {
  children?: ReactNode;
};

export default function LendCopy({}: Props): ReactElement {
  const [copyNumber, setCopyNumber] = useState('');

  const onChangeCopyNumber = (text: string, rawText?: string) => {
    setCopyNumber(text);
  };

  return (
    <BaseScreen headerProps={{title: 'Emprestar exemplar'}}>
      <MainWrapper>
        <TextField
          error={{
            hasError: true,
            message: 'Número de exemplar inválido',
          }}
          placeholder="193434-3"
          onChange={onChangeCopyNumber}
          type="only-numbers"
          value={copyNumber}
          label={LendCopyTranslations.copyNumber}
        />
      </MainWrapper>
    </BaseScreen>
  );
}
