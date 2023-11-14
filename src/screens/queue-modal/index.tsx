import React, { type ReactElement } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { ContainerModal } from './style'
import Text from '../../core/base-text/base-text'

interface Props {
  modalVisible: boolean
  fila?: boolean
  action: () => void
}

/*

TODO - Modal Fila de espera

> Adicionar Icone (tem exemplos nas outras telas);
> Colocar o texto;
> Colocar os botões;
> Estilizar os componentes (Modal, Container, Icone...);

*/

export default function QueueModal ({
  modalVisible,
  action
}: Props): ReactElement {
  return (
    <Modal visible={modalVisible} animationType="fade" transparent>
      <ContainerModal>
        <TouchableOpacity
          onPress={() => {
            action()
          }}
          style={{
            backgroundColor: 'green',
            height: 100,
            width: 100
          }}></TouchableOpacity>
        <Text>Você foi adicionado na fila de espera</Text>
      </ContainerModal>
    </Modal>
  )
}
