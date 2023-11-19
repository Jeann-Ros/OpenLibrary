import React, { useState, type ReactElement } from 'react'
import BaseScreen from '../../core/base-screen/base-screen'
import TextField from '../../core/base-text-field/base-text-field'
import { UseNavigation } from '../../core/hooks/use-navigation'
import { Container } from './styled'
import CoreButton from '../../core/button'
import PickerCore from '../../core/base-picker/base-picker'
import DatePickerCore from '../../core/base-date-picker/base-date-picker'
import DefaultTextField from '../../core/text-field-default/text-field-default'

export default function BaixaExemplar (): ReactElement {
  const navigation = UseNavigation()
  const [exempNumber, setExempNumber] = useState<string>('')
  const [funcNumber, setFuncNumber] = useState<string>('')
  const [motivoBaixa, setMotivoBaixa] = useState<string>('')
  const [descBaixa, setDescBaixa] = useState<string>('')
  const [dataBaixa, setDataBaixa] = useState<Date>(new Date())

  const DataPicker = [
    { label: 'Danificado', value: 'DANIFICADO' },
    { label: 'Roubado', value: 'ROUBADO' },
    { label: 'Perdido', value: 'PERDIDO' }
  ]

  return (
    <BaseScreen
      hasScrollView
      headerProps={{
        title: 'Baixa de Exemplar',
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
          label="NÚMERO DO EXEMPLAR"
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
          label="CÓDIGO DO FUNCIONÁRIO"
          placeholder="123-456"
          type="custom"
          options={{ mask: '999-999' }}
        />
      </Container>
      <Container>
        <PickerCore
          value={motivoBaixa}
          DataPicker={DataPicker}
          onChange={value => {
            setMotivoBaixa(value)
          }}
        />
      </Container>
      <Container>
        <DefaultTextField
          type="default"
          value={descBaixa}
          onChange={text => {
            setDescBaixa(text)
          }}
          label="DESCRIÇÃO"
          placeholder="Disserte sobre a baixa..."
        />
      </Container>
      <Container>
        <DatePickerCore
          onChange={value => {
            setDataBaixa(value)
          }}
          date={dataBaixa}
        />
      </Container>
      <Container>
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
