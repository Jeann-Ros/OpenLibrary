import React, { type ReactElement } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { ContainerModal, TOpp,TOpp2, Botoes, Faixa } from './style'
import Text from '../../core/base-text/base-text'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faBookDead, faBookOpenReader} from '@fortawesome/free-solid-svg-icons';
import { LeadingIcon } from '../../core/base-screen/components/screen-header/screen-header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


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
      <Faixa></Faixa>
      
      <Text style={{textAlign:'center',fontSize: 25,color: 'red'}}>LIVRO JÁ EMPRESTADO!</Text>
      <Text style={{textAlign:'center',width: 250,alignSelf: 'center'}}>Deseja adicionar o usuário a Fila de Espera?</Text>
        <Botoes>
        <TOpp
          onPress={() => {
            action()
          }}
          ><Text style={{color: 'white'}}>CONFIRMAR</Text></TOpp>
          <TOpp2
          onPress={() => {
            action()
          }}
          ><Text style={{color: '#733119'}}>CANCELAR</Text></TOpp2>
          </Botoes>
      </ContainerModal>
    </Modal>
  )
}
