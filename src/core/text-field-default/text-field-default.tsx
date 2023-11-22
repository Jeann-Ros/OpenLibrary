import {
  ErrorMessage,
  ErrorWrapper,
  Label,
  LabelWrapper,
  TextFieldMainWrapper,
  TextFieldWrapper
} from './text-field-default.styles'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../assets/Colors'
import { TextInput, type KeyboardType } from 'react-native'
import React, { type ReactElement } from 'react'

interface Props {
  type: KeyboardType
  onChange: (text: string, rawText?: string | undefined) => void
  value: string
  label: string
  placeholder?: string
  error?: {
    message: string
    hasError: boolean
  }
  secureTextEntry?: boolean
  editable?: boolean
  maxLength?: number
}

export default function DefaultTextField ({
  type,
  onChange,
  value,
  label,
  placeholder,
  error = { hasError: false, message: '' },
  secureTextEntry,
  editable,
  maxLength
}: Props): ReactElement {
  return (
    <TextFieldMainWrapper>
      <TextFieldWrapper hasError={error?.hasError}>
        <LabelWrapper>
          <Label>{label}</Label>
        </LabelWrapper>
        <TextInput
          placeholderTextColor={Colors.gray}
          style={{
            fontFamily: Fonts.Bold,
            fontSize: 20
          }}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={type}
          editable={editable}
          maxLength={maxLength}
        />
      </TextFieldWrapper>
      {error?.hasError && (
        <ErrorWrapper>
          <ErrorMessage>{error?.message}</ErrorMessage>
        </ErrorWrapper>
      )}
    </TextFieldMainWrapper>
  )
}
