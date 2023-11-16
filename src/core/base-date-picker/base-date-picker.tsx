import React, { type ReactElement } from 'react'
import {
  DatePickerContainer,
  DatePickerField,
  DatePickerTextContainer,
  Label,
  LabelContainer
} from './base-date-picker-style'
import { type StyleProp, type ViewStyle } from 'react-native'
import { Colors } from '../../assets/Colors'

interface Props {
  label?: string
  onChange: ((date: Date) => void) | undefined
  date: Date
  style?: StyleProp<ViewStyle>
}

export default function DatePickerCore ({
  label = 'SELECIONE A DATA',
  onChange,
  date,
  style
}: Props): ReactElement {
  return (
    <DatePickerContainer>
      <DatePickerTextContainer>
        <LabelContainer>
          <Label>{label}</Label>
          <DatePickerField
            is24hourSource="locale"
            textColor={Colors.primary_brown}
            fadeToColor="none"
            onDateChange={onChange}
            date={date}
            maximumDate={new Date()}
            androidVariant="iosClone"
            mode="date"
            locale="pt"
          />
        </LabelContainer>
      </DatePickerTextContainer>
    </DatePickerContainer>
  )
}
