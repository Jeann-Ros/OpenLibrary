import { type ReactElement, type ReactNode, useState } from 'react'
import BaseScreen from '../../core/base-screen/base-screen'
import TextField from '../../core/base-text-field/base-text-field'
import { MainWrapper } from './lend-copy.styles'
import { LendCopyTranslations } from './translations'
import { UseNavigation } from '../../core/hooks/use-navigation'

interface Props {
  children?: ReactNode
}

export default function LendCopy ({}: Props): ReactElement {
  const [copyNumber, setCopyNumber] = useState('')

  const onChangeCopyNumber = (text: string, rawText?: string) => {
    setCopyNumber(text)
  }

  const navigation = UseNavigation()

  return (
    <BaseScreen
      headerProps={{
        title: 'Emprestar exemplar',
        onPressLeadingIcon: navigation.goBack
      }}>
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
      </MainWrapper>
    </BaseScreen>
  )
}
