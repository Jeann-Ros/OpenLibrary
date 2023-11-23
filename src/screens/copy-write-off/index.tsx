import axios from 'axios'
import React, { useState, type ReactElement } from 'react'
import DatePickerCore from '../../core/base-date-picker/base-date-picker'
import PickerCore from '../../core/base-picker/base-picker'
import BaseScreen from '../../core/base-screen/base-screen'
import TextField from '../../core/base-text-field/base-text-field'
import CoreButton from '../../core/button'
import { UseNavigation } from '../../core/hooks/use-navigation'
import DefaultTextField from '../../core/text-field-default/text-field-default'
import BaixaBuilder from '../../utils/BaixaBulder'
import { Container } from './styled'
import { Alert } from 'react-native'

export default function BaixaExemplar (): ReactElement {
  const navigation = UseNavigation()
  const [exempNumber, setExempNumber] = useState<string>('')
  const [funcNumber, setFuncNumber] = useState<string>('')
  const [motivoBaixa, setMotivoBaixa] = useState<string>('')
  const [descBaixa, setDescBaixa] = useState<string>('')
  const [dataBaixa, setDataBaixa] = useState<Date>(new Date())
  const ipLocal = '172.17.18.199'
  const baseUrl = `http://${ipLocal}:8080/baixa/realizar-baixa`

  const ChamadaRegistraBaixa = (): void => {
    const configurationObject = {
      url: baseUrl,
      method: 'POST',
      data: BaixaBuilder(
        exempNumber,
        funcNumber,
        motivoBaixa,
        descBaixa,
        dataBaixa
      )
    }

    axios(configurationObject)
      .then(response => {
        if (response.status === 200) {
          Alert.alert('Sucesso!', JSON.stringify(response.data), [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Home')
              }
            }
          ])
        } else {
          throw new Error('Um erro ocorreu')
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error))
      })
  }

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
          placeholder="12345"
          type="custom"
          options={{ mask: '99999' }}
        />
      </Container>
      <Container>
        <TextField
          value={funcNumber}
          onChange={text => {
            setFuncNumber(text)
          }}
          label="CÓDIGO DO FUNCIONÁRIO"
          placeholder="123456"
          type="custom"
          options={{ mask: '999999' }}
        />
      </Container>
      <Container>
        <PickerCore
          label="SEILÁ MANO"
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
          disable={
            exempNumber === '' ||
            funcNumber === '' ||
            motivoBaixa === '' ||
            descBaixa === ''
          }
          text="AVANÇAR"
          action={() => {
            ChamadaRegistraBaixa()
          }}
        />
      </Container>
    </BaseScreen>
  )
}
