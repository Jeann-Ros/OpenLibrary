import { type ReactElement, type ReactNode, useState } from 'react'
import BaseScreen from '../../core/base-screen/base-screen'
import TextField from '../../core/base-text-field/base-text-field'
import { MainWrapper } from './lend-copy.styles'
import { LendCopyTranslations } from './translations'
import { UseNavigation } from '../../core/hooks/use-navigation'
import CoreButton from '../../core/button'
import QueueModal from '../queue-modal'

interface Props {
  children?: ReactNode
}

export default function LendCopy ({}: Props): ReactElement {
  const [copyNumber, setCopyNumber] = useState('')

  const onChangeCopyNumber = (text: string, rawText?: string) => {
    setCopyNumber(text)
  }

  const [modalValue, setModalValue] = useState(false)

  const FechaModal = (): void => {
    setModalValue(!modalValue)
  }

  return (
    <BaseScreen headerProps={{ title: 'Emprestar exemplar' }}>
      <QueueModal modalVisible={modalValue} action={FechaModal} />
      <MainWrapper>
        <TextField
          error={{
            hasError: true,
            message: 'Número de exemplar inválido'
          }}
          placeholder="193434-3"
          onChange={onChangeCopyNumber}
          type="custom"
          value={copyNumber}
          options={{ mask: '999999-9' }}
          label={LendCopyTranslations.copyNumber}
        />
        <CoreButton
          text="Abrir modal"
          action={() => {
            setModalValue(!modalValue)
          }}
        />
      </MainWrapper>
    </BaseScreen>
  )
}
