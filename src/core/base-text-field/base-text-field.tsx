import {
  TextInputMask,
  type TextInputMaskOptionProp,
  type TextInputMaskTypeProp
} from 'react-native-masked-text'
import {
  ErrorMessage,
  ErrorWrapper,
  Label,
  LabelWrapper,
  TextFieldMainWrapper,
  TextFieldWrapper
} from './base-text-field.styles'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../assets/Colors'

interface Props {
  type: TextInputMaskTypeProp
  onChange: (text: string, rawText?: string | undefined) => void
  options?: TextInputMaskOptionProp
  value: string
  label: string
  placeholder?: string
  maxLength?: number
  error?: {
    message: string
    hasError: boolean
  }
}

export default function TextField({
  type,
  options,
  onChange,
  value,
  label,
  placeholder,
  error,
  maxLength,
}: Props) {
  return (
    <TextFieldMainWrapper>
      <TextFieldWrapper hasError={error?.hasError}>
        <LabelWrapper>
          <Label>{label}</Label>
        </LabelWrapper>
        <TextInputMask
          maxLength={maxLength}
          placeholderTextColor={Colors.gray}
          placeholder={placeholder}
          style={{
            fontFamily: Fonts.Bold,
            fontSize: 20
          }}
          options={options}
          value={value}
          onChangeText={onChange}
          type={type}
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
