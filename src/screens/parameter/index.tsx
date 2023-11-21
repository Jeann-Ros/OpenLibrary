import React, { ReactElement, useState } from "react";
import BaseScreen from "../../core/base-screen/base-screen";
import { UseNavigation } from "../../core/hooks/use-navigation";
import { IndividualInputWrapper } from "../lend-copy/lend-copy.styles";
import Text from "../../core/base-text/base-text";
import TextField from '../../core/base-text-field/base-text-field';
import { ParameterTranslations } from "./translations";
import DatePickerCore from "../../core/base-date-picker/base-date-picker";
import CoreButton from "../../core/button";
import { CommonActions } from "@react-navigation/native";
import { Routes } from "../../../App";
import { Container } from "../copy-write-off/styled";
import DefaultTextField from "../../core/text-field-default/text-field-default";
import { Mask } from "react-native-svg";

export default function Parameter ():ReactElement{
    const navigation = UseNavigation()
    const [copyNumber, setCopyNumber] = useState('');
    const [Nome, setNome] = useState<string>('');
    const [NomeF, setNomeF] = useState<string>('');
    const [End, setEnd] = useState<string>('');
    const [Phone, setPhone] = useState<string>('');
    const [Cid, setCid] = useState<string>('');
    const [CEP,setCEP] = useState<string>('')
    const [Est, setEst] = useState<string>('');
    const [Pais, setPais] = useState<string>('');
    const [CNPJ, setCNPJ] = useState<string>('');
    const [Mail, setMail] = useState<string>('');
    const [Web, setWeb] = useState<string>('');
    const [dataBaixa, setDataBaixa] = useState<Date>(new Date())

    const onChangeCopyNumber = (text: string, rawText?: string) => {
      setCopyNumber(text);
    };

    const onChangeNome = (text: string, rawText?: string) => {
        setNome(text);
    };

    const onChangeNomeF = (text: string, rawText?: string) => {
        setNomeF(text);
    };

    const onChangeEnd = (text: string, rawText?: string) => {
        setEnd(text);
    };

    const onChangePhone = (text: string, rawText?: string) => {
        setPhone(text);
    };

    const onChangeCid = (text: string, rawText?: string) => {
        setCid(text);
    };

    const onChangeCEP = (text: string, rawText?: string) => {
        setCEP(text);
    };

    const onChangeEst = (text: string, rawText?: string) => {
        setEst(text);
    };

    const onChangePais = (text: string, rawText?: string) => {
        setPais(text);
    };

    const onChangeCNPJ = (text: string, rawText?: string) => {
        setCNPJ(text);
    };


    const onChangeMail = (text: string, rawText?: string) => {
        setMail(text);
    };


    const onChangeWeb = (text: string, rawText?: string) => {
        setWeb(text);
    };

    return(
        <BaseScreen hasScrollView
        headerProps={{
          title: 'Parametrização',
          showLeadingIcon: false,
        }}>
            <Container>
                <DefaultTextField error={{
                    hasError: true,
                    message: 'Nome Inválido',
                }}
                placeholder="OpenLibrary"
                onChange={onChangeNome}
                value={Nome}
                label={ParameterTranslations.inputs.EmpNome} type={"default"}></DefaultTextField>
            </Container>

              <Container>
              <DefaultTextField error={{
                hasError: true,
                message: 'Nome Fantasia Inválido',
              }}
              placeholder="OpenLibrarySP"
              onChange={onChangeNomeF}
              type="default"
              value={NomeF}
              label={ParameterTranslations.inputs.EmpNomeF}></DefaultTextField>
            </Container>

            <Container>
            <DefaultTextField error={{
                hasError: true,
                message: 'Endereço Inválido',
              }}
              placeholder="Rua Nº"
              onChange={onChangeEnd}
              type="default"
              value={End}
              label={ParameterTranslations.inputs.EmpEnd}></DefaultTextField>
            </Container>
            
            <Container>
            <DatePickerCore
          onChange={value => {
                setDataBaixa(value)
            }}
             date={dataBaixa}
             label="DATA DE FUNDAÇÃO"
            />
            </Container>

            <Container>
            <TextField error={{
                hasError: true,
                message: 'Telefone Inválido',
              }}
              placeholder="(99)12345-6789"
              onChange={onChangePhone}
              type="cel-phone"
              value={Phone}
              label={ParameterTranslations.inputs.EmpPhone}></TextField>
            </Container>


            <Container>
            <DefaultTextField error={{
                hasError: true,
                message: 'Cidade Inválido',
              }}
              placeholder="Cidade"
              onChange={onChangeCid}
              type="default"
              value={Cid}
              label={ParameterTranslations.inputs.EmpCid}></DefaultTextField>
            </Container>
            
            <Container>
            <TextField error={{
                hasError: true,
                message: 'CEP Inválido',
              }}
              placeholder="00000-000"
              onChange={onChangeCEP}
              type="zip-code"
              value={CEP}
              label={ParameterTranslations.inputs.EmpCep}></TextField>
            </Container>

            <Container>
            <DefaultTextField error={{
                hasError: true,
                message: 'Estado Inválido',
              }}
              placeholder="Estado"
              onChange={onChangeEst}
              type="default"
              value={Est}
              label={ParameterTranslations.inputs.EmpEstado}></DefaultTextField>
            </Container>
            
            <Container>
            <DefaultTextField error={{
                hasError: true,
                message: 'País Inválido',
              }}
              placeholder="País"
              onChange={onChangePais}
              type="default"
              value={Pais}
              label={ParameterTranslations.inputs.EmpPais}></DefaultTextField>
            </Container>
            
            <Container>
            <TextField error={{
                hasError: true,
                message: 'CNPJ Inválido',
              }}
              placeholder="00.000.000/0000-00"
              onChange={onChangeCNPJ}
              type="cnpj"
              value={CNPJ}
              label={ParameterTranslations.inputs.EmpCnpj}></TextField>
            </Container>
            
            <Container>
            <DefaultTextField error={{
                hasError: true,
                message: 'E-Mail Inválido',
              }}
              placeholder="email@example.com"
              onChange={onChangeMail}
              type="default"
              value={Mail}
              label={ParameterTranslations.inputs.EmpMail}></DefaultTextField>
            </Container>
            
            <Container>
            <DefaultTextField error={{
                hasError: true,
                message: 'WebSite Inválido',
              }}
              placeholder="example.com"
              onChange={onChangeWeb}
              type="default"
              value={Web}
              label={ParameterTranslations.inputs.EmpSite}></DefaultTextField>
            </Container>

            <CoreButton action={() => navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [{ name: Routes.home }],
                })
            )} text={"AVANÇAR"}></CoreButton>
        </BaseScreen>
    )
}