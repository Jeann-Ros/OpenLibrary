import React, { useState, type ReactElement } from 'react'
import BaseScreen from '../../core/base-screen/base-screen'
import TextField from '../../core/base-text-field/base-text-field'
import CoreButton from '../../core/button'
import { UseNavigation } from '../../core/hooks/use-navigation'
import { Container } from './styled'

export default function RegistrarExemplar (): ReactElement {
  const navigation = UseNavigation()
  const [exempNumber, setExempNumber] = useState<string>('')
  const [funcNumber, setFuncNumber] = useState<string>('')
  const [dataBaixa, setDataBaixa] = useState<Date>(new Date())

  return (
    <BaseScreen
      hasScrollView
      headerProps={{
        title: 'Registro de Exemplar',
        showLeadingIcon: true,
        onPressLeadingIcon: () => {
          navigation.goBack()
        }
      }}>
      <Container>
        <TextField
          value={exempNumber}
          onChange={text => {
            setExempNumber(text)
          }}
          label="NÚMERO DO LIVRO"
          placeholder="123456-7"
          type="custom"
          options={{ mask: '999999-9' }}
        />
      </Container>
      <Container>
        <TextField
          value={funcNumber}
          onChange={text => {
            setFuncNumber(text)
          }}
          label="ANO DE LANÇAMENTO"
          placeholder="1950"
          type="custom"
          options={{ mask: '9999' }}
        />
      </Container>
      <Container>
        <TextField
          value={exempNumber}
          onChange={text => {
            setExempNumber(text)
          }}
          label="EDIÇÃO"
          placeholder="Disserte sobre a baixa..."
          type="custom"
          options={{ mask: 'S' }}
        />
      </Container>
      <Container style={{ paddingTop: 320 }}>
        <CoreButton
          text="AVANÇAR"
          action={() => {
            console.log('ChristianBR')
          }}
        />
      </Container>
    </BaseScreen>
  )
}
