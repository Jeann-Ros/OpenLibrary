import {
    ErrorMessage,
    ErrorWrapper,
    Label,
    LabelWrapper,
    TextFieldMainWrapper,
    TextFieldWrapper,
} from './text-field-default.styles';
import { Fonts } from '../../assets/fonts';
import { Colors } from '../../assets/Colors';
import { TextInput } from 'react-native';
import { KeyboardType } from 'react-native';

type Props = {
    type: KeyboardType;
    onChange: (text: string, rawText?: string | undefined) => void;
    value: string;
    label: string;
    placeholder?: string;
    error?: {
        message: string;
        hasError: boolean;
    };
    secureTextEntry?: boolean;
    editable?: boolean;
};

export default function DefaultTextField({
    type,
    onChange,
    value,
    label,
    placeholder,
    error,
    secureTextEntry,
    editable,
}: Props) {
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
                        fontSize: 20,
                    }}

                    value={value}
                    onChangeText={onChange}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    keyboardType={type}
                    editable={editable}
                />
            </TextFieldWrapper>
            {error?.hasError && (
                <ErrorWrapper>
                    <ErrorMessage>{error?.message}</ErrorMessage>
                </ErrorWrapper>
            )}
        </TextFieldMainWrapper>
    );
}
