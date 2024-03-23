import React, {type ReactElement} from 'react';
import {
  ErrorContainer,
  ErrorMessage,
  Label,
  LabelContainer,
  PickerContainer,
  PickerField,
  PickerTextContainer,
} from './base-picker-style';

interface Item {
  label: string;
  value: any;
  key?: string | number;
  color?: string;
  /**
   * Used when you want a different label displayed
   * on the input than what is displayed on the Picker
   *
   * If falsy, label is used
   */
  inputLabel?: string;
}

interface Props {
  value: any;
  DataPicker: Item[];
  error?: {hasError: boolean; message: string};
  label?: string;
  placeholder?: string;
  onChange: (value: any, index: number) => void;
}

export default function PickerCore({
  DataPicker,
  error,
  label = 'SELECIONE UMA OPÇÃO',
  placeholder = 'Selecione uma opção...',
  value,
  onChange,
}: Props): ReactElement {
  return (
    <PickerContainer>
      <PickerTextContainer>
        <LabelContainer>
          <Label>{label}</Label>
        </LabelContainer>
        <PickerField
          value={value}
          onValueChange={onChange}
          items={DataPicker}
          placeholder={{label: placeholder, value: ''}}
        />
      </PickerTextContainer>
      {error?.hasError && (
        <ErrorContainer>
          <ErrorMessage>{error?.message}</ErrorMessage>
        </ErrorContainer>
      )}
    </PickerContainer>
  );
}
