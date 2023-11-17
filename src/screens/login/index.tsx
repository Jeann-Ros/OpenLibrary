import React, { ReactElement, useState } from 'react';
import { LogoOpen } from '../../assets/images';
import BaseScreen from '../../core/base-screen/base-screen';
import CoreButton from '../../core/button';
import * as S from './styled';
import { CommonActions } from '@react-navigation/native';
import { Routes } from '../../../App';
import { ImageLogo } from './styled';
import CoreButtonDisabled from '../../core/button-disabled';
import { Colors } from '../../assets/Colors';
import TextField from '../../core/base-text-field/base-text-field';
import DefaultTextField from '../../core/text-field-default/text-field-default';

export default function LoginScreen({ navigation }: any): ReactElement {

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    const handleInputChange = (input: string, text: string) => {
        if (input === 'email')
            setEmail(text);
        else if (input === 'password')
            setPassword(text);
        setIsButtonDisabled(!emailRegex.test(email) || !passwordRegex.test(password))
    }

    const handleErrorInput = (input: string) => {
        if (input === 'email')
            return !emailRegex.test(email);
        else
            return !passwordRegex.test(password);
    }

    return (
        <BaseScreen hideHeader hasScrollView={false}>
            <S.ImageLogo source={LogoOpen} />
            <S.Container>
                <DefaultTextField
                    error={{
                        hasError: handleErrorInput('email'),
                        message: 'email inválido',
                    }}
                    placeholder="meuemail@email.com"
                    onChange={(text) => handleInputChange('email', text)}
                    type="email-address"
                    value={email}
                    label={"Email"}

                />
                <DefaultTextField
                    error={{
                        hasError: handleErrorInput('password'),
                        message: 'senha inválida',
                    }}
                    placeholder="***********"
                    onChange={(text) => handleInputChange('password', text)}
                    type="default"
                    value={password}
                    label={"Senha"}
                    secureTextEntry={true}
                />
            </S.Container>
            <CoreButtonDisabled
                style={{ marginTop: 50, backgroundColor: isButtonDisabled ? Colors.gray : Colors.primary_brown }}
                text="AVANÇAR"
                disable={isButtonDisabled}
                action={() =>
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [{ name: Routes.home }],
                        }),
                    )
                }
            />
        </BaseScreen>
    );
}
