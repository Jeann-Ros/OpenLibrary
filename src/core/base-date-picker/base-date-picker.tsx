import React, { type ReactElement } from 'react';
import { Colors } from '../../assets/Colors';
import {
  DatePickerContainer,
  DatePickerField,
  DatePickerTextContainer,
  Label,
  LabelContainer,
} from './base-date-picker-style';

interface Props {
  label?: string;
  onChange: ((date: Date) => void) | undefined;
  date: Date;
  minimumDate?: Date;
  maximumDate?: Date
}

export default function DatePickerCore({
  label = 'SELECIONE A DATA',
  onChange,
  date,
  minimumDate,
  maximumDate
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
            androidVariant="iosClone"
            mode="date"
            locale="pt"
            minimumDate={minimumDate}
            maximumDate={maximumDate}
          />
        </LabelContainer>
      </DatePickerTextContainer>
    </DatePickerContainer>
  );
}
