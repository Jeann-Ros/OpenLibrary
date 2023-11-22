import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {type ReactElement} from 'react';
import {Modal} from 'react-native';

import {Botoes, ContainerModal, Faixa, TOpp, TelaPreta} from './style';
import Text from '../../../core/base-text/base-text';

interface Props {
  modalVisible: boolean;
  fila?: boolean;
  action: () => void;
}

/*

TODO - Modal Fila de espera

> Adicionar Icone (tem exemplos nas outras telas);
> Colocar o texto;
> Colocar os botões;
> Estilizar os componentes (Modal, Container, Icone...);

*/

export default function SuccessModal({
  modalVisible,
  action,
}: Props): ReactElement {
  return (
    <Modal visible={modalVisible} animationType="fade" transparent>
      <TelaPreta>
        <ContainerModal>
          <Faixa></Faixa>
          <FontAwesomeIcon
            icon={faCheck}
            size={40}
            style={{color: '#15ff00', alignSelf: 'center', margin: 'auto'}}
          />
          <Text style={{textAlign: 'center', fontSize: 25, color: 'red'}}>
            EMPRÉSTIMO REALIZADO COM SUCESSO!
          </Text>

          <Botoes>
            <TOpp
              onPress={() => {
                action();
              }}>
              <Text style={{color: 'white'}}>CONFIRMAR</Text>
            </TOpp>
          </Botoes>
        </ContainerModal>
      </TelaPreta>
    </Modal>
  );
}
