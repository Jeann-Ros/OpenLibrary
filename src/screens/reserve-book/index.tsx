import React, { ReactElement, useState } from 'react';
import BaseScreen from '../../core/base-screen/base-screen';
import * as S from './styled';
import DefaultTextField from '../../core/text-field-default/text-field-default';
import { UseNavigation } from '../../core/hooks/use-navigation';
import TextField from '../../core/base-text-field/base-text-field';
import DatePickerCore from '../../core/base-date-picker/base-date-picker'
import CoreButton from '../../core/button';

export default function ReserveScreen({ navigation }: any): ReactElement {
    const { goBack } = UseNavigation();
    const [usuCPF, setUsuCPF] = useState("");
    const [livroID, setLivroId] = useState("");
    const [data, setData] = useState<Date>(new Date());

    return (
        <BaseScreen
            headerProps={{
                title: 'Reservar Livro',
                onPressLeadingIcon: goBack,
            }}
        >
            <S.Container>
                <TextField
                    value={usuCPF}
                    onChange={text => {
                        setUsuCPF(text)
                    }}
                    label="CPF DO USUÁRIO"
                    placeholder="xxx.xxx.xxx-xx"
                    type='cpf'
                />
            </S.Container>
            <S.Container>
                <TextField
                    value={livroID}
                    onChange={text => {
                        setLivroId(text)
                    }}
                    label="CÓDIGO DO LIVRO"
                    placeholder="123456"
                    type='only-numbers'
                />
            </S.Container>
            <S.Container>
                <DatePickerCore
                    onChange={value => {
                        setData(value)
                    }}
                    date={data}
                />
            </S.Container>
            <S.Container>
                <CoreButton
                    text="AVANÇAR"
                    action={() => {
                        console.log(usuCPF+" "+livroID+""+""+data);
                    }}
                />
            </S.Container>

        </BaseScreen>
    );
}
