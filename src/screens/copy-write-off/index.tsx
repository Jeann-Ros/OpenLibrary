import React, { useState, type ReactElement } from 'react'
import BaseScreen from '../../core/base-screen/base-screen'
import TextField from '../../core/base-text-field/base-text-field'
import { UseNavigation } from '../../core/hooks/use-navigation'
import { Container } from './styled'
import CoreButton from '../../core/button'

export default function BaixaExemplar (): ReactElement {
  const [exempNumber, setExempNumber] = useState<string>('')
  const navigation = UseNavigation()

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
