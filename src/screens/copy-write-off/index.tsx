import React, { useState, type ReactElement } from 'react'
import BaseScreen from '../../core/base-screen/base-screen'
import TextField from '../../core/base-text-field/base-text-field'
import { UseNavigation } from '../../core/hooks/use-navigation'
import { Container } from './styled'
import CoreButton from '../../core/button'
import PickerCore from '../../core/base-picker/base-picker'
import DatePickerCore from '../../core/base-date-picker/base-date-picker'

export default function BaixaExemplar (): ReactElement {
  const navigation = UseNavigation()
  const [exempNumber, setExempNumber] = useState<string>('')
  const [motivoBaixa, setMotivoBaixa] = useState<string>('')
  const [dataBaixa, setDataBaixa] = useState<Date>(new Date())

  const DataPicker = [
    { label: 'Danificado', value: 'DANIFICADO' },
    { label: 'Roubado', value: 'ROUBADO' },
    { label: 'Perdido', value: 'PERDIDO' }
  ]

  /*

- Exemplar id. - OK
- Funcionário id. - OK
- Motivo baixa (picker) - OK
- Desc. baixa (text) - OK
- Data baixa (Date picker) - OK

*/

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
        <TextField
          value={exempNumber}
          onChange={text => {
            setExempNumber(text)
          }}
          label="CÓDIGO DO FUNCIONÁRIO"
          placeholder="123-456"
          type="custom"
          options={{ mask: '123-456' }}
        />
        <PickerCore
          value={motivoBaixa}
          DataPicker={DataPicker}
          onChange={value => {
            setMotivoBaixa(value)
          }}
        />
        <TextField
          value={exempNumber}
          onChange={text => {
            setExempNumber(text)
          }}
          label="DESCRIÇÃO"
          placeholder="Disserte sobre a baixa..."
          type="custom"
          options={{ mask: 'S' }}
        />
        <DatePickerCore
          onChange={value => {
            setDataBaixa(value)
          }}
          date={dataBaixa}
        />
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
