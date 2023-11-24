import React, { useState, type ReactElement } from 'react'
import BaseScreen from '../../core/base-screen/base-screen'
import TextField from '../../core/base-text-field/base-text-field'
import CoreButton from '../../core/button'
import { UseNavigation } from '../../core/hooks/use-navigation'
import { Container } from './styled'
import DefaultTextField from '../../core/text-field-default/text-field-default'
import ExemplarBuilder from '../../utils/ExemplarBuilder'
import axios from 'axios'
import { Alert } from 'react-native'

export default function RegistrarExemplar (): ReactElement {
  const navigation = UseNavigation()
  const [bookNumber, setBookNumber] = useState<string>('')
  const [yearNumber, setYearNumber] = useState<string>('')
  const [editCopy, setEditCopy] = useState<string>('')
  const ipLocal = '172.17.18.199'
  const baseUrl = `http://${ipLocal}:8080/exemplar/registrar-exemplar`

  const ano = new Date().getFullYear()

  const ChamadaRegistraExemplar = (): void => {
    const data = new Date()

    const configurationObject = {
      url: baseUrl,
      method: 'POST',
      data: ExemplarBuilder(bookNumber, 'ATIVO', editCopy, yearNumber, data)
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
          value={bookNumber}
          onChange={text => {
            setBookNumber(text)
          }}
          label="NÚMERO DO LIVRO"
          placeholder="12345"
          type="custom"
          options={{ mask: '99999' }}
        />
      </Container>
      <Container>
        <DefaultTextField
          value={yearNumber}
          onChange={text => {
            setYearNumber(text)
          }}
          label="ANO DE LANÇAMENTO"
          placeholder="1950"
          type="number-pad"
          maxLength={4}
          error={{
            message: 'Insira um ano valido para inserção.',
            hasError: ano < Number(yearNumber)
          }}
        />
      </Container>
      <Container>
        <DefaultTextField
          value={editCopy}
          onChange={text => {
            setEditCopy(text)
          }}
          label="EDIÇÃO"
          placeholder="2 - Edição"
          type="default"
        />
      </Container>
      <Container style={{ paddingTop: 320 }}>
        <CoreButton
          disable={
            ano < Number(yearNumber) ||
            yearNumber === '' ||
            bookNumber === '' ||
            editCopy === ''
          }
          text="AVANÇAR"
          action={() => {
            ChamadaRegistraExemplar()
          }}
        />
      </Container>
    </BaseScreen>
  )
}
