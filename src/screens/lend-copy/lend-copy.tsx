import {ReactElement, ReactNode, useState} from 'react';
import {url} from '../../conts';
import BaseScreen from '../../core/base-screen/base-screen';
import TextField from '../../core/base-text-field/base-text-field';
import CoreButton from '../../core/button';
import {UseNavigation} from '../../core/hooks/use-navigation';
import QueueModal from '../queue-modal';
import {
  ButtonWrapper,
  IndividualInputWrapper,
  InputGroupWrapper,
  MainWrapper,
} from './lend-copy.styles';
import {LendCopyTranslations} from './translations';
import {useAtom} from 'jotai';
import SuccessModal from './sucess-modal';
import DefaultTextField from '../../core/text-field-default/text-field-default';

interface Props {
  children?: ReactNode;
}

interface CorpoRequisicao {
  usuId: number;
  funcId: number;
  exempIds: number[];
}

export default function LendCopy({}: Props): ReactElement {
  const {goBack, navigate} = UseNavigation();
  const [copyNumber, setCopyNumber] = useState('');
  const [usuCode, setUsuCode] = useState('');
  const [funcCode, setFuncCode] = useState('');
  const [success, setSuccess] = useState(false);

  const onChangeCopyNumber = (text: string, rawText?: string) => {
    setCopyNumber(text);
  };

  const onChangeUsuNumber = (text: string, rawText?: string) => {
    setUsuCode(text);
  };

  const onChangeFuncNumber = (text: string, rawText?: string) => {
    setFuncCode(text);
  };

  const [modalValue, setModalValue] = useState(false);

  const fecharModal = (): void => {
    setModalValue(!modalValue);
  };

  const fecharSucessModel = () => {
    setSuccess(false);
  };

  const onSubmit = () => {
    console.log('chamando submit');
    const data: CorpoRequisicao = {
      exempIds: copyNumber.split(',').map(item => parseInt(item)),
      funcId: parseInt(funcCode),
      usuId: parseInt(usuCode),
    };
    console.log(data);

    fetch(`${url}/emprestimo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.status !== 200) setModalValue(true);
        else setSuccess(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <BaseScreen
      headerProps={{
        title: LendCopyTranslations.screenTitle,
        onPressLeadingIcon: goBack,
      }}>
      <MainWrapper>
        <SuccessModal modalVisible={success} action={fecharSucessModel} />
        <QueueModal modalVisible={modalValue} action={fecharModal} />
        <InputGroupWrapper>
          <IndividualInputWrapper>
            <DefaultTextField
              error={{
                hasError: false,
                message: 'Número de exemplar inválido',
              }}
              placeholder="1,2,3"
              onChange={onChangeCopyNumber}
              type="default"
              value={copyNumber}
              label={LendCopyTranslations.inputs.copyNumber}
            />
          </IndividualInputWrapper>

          <IndividualInputWrapper>
            <DefaultTextField
              error={{
                hasError: false,
                message: 'Código do leitor',
              }}
              placeholder="12"
              onChange={onChangeUsuNumber}
              type="numeric"
              value={usuCode}
              label={'CÓDIGO DO LEITOR'}
            />
          </IndividualInputWrapper>

          <IndividualInputWrapper>
            <DefaultTextField
              error={{
                hasError: false,
                message: 'Código do Funcionario',
              }}
              placeholder="193"
              onChange={onChangeFuncNumber}
              type="numeric"
              value={funcCode}
              label={'CÓDIGO DO FUNCIONÁRIO'}
            />
          </IndividualInputWrapper>
          <ButtonWrapper>
            <CoreButton action={onSubmit} text={'REGISTRAR EMPRÉSTIMO'} />
          </ButtonWrapper>
        </InputGroupWrapper>
      </MainWrapper>
    </BaseScreen>
  );
}
