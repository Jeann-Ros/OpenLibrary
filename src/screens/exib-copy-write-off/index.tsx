import axios from 'axios'
import React, { useEffect, useState, type ReactElement } from 'react'
import { FlatList, Text } from 'react-native'
import BaseScreen from '../../core/base-screen/base-screen'
import { UseNavigation } from '../../core/hooks/use-navigation'
import { Container, ContainerItem, TextBaixa, TitleBaixa } from './styled'
import DefaultTextField from '../../core/text-field-default/text-field-default'

interface ItemProps {
  baixaId: string
  exempId: string
  funciId: string
  motivo: string
  desc: string
  data: Date
}

export default function BaixaExemplarRelatorios (): ReactElement {
  const [baixas, setBaixas] = useState<any>([])
  const [ano, setAno] = useState('2023')
  const navigation = UseNavigation()
  const ipLocal = '172.17.18.199'
  const baseUrl = `http://${ipLocal}:8080/baixa/resgatar-baixa-ano`

  const anoLimit = new Date().getFullYear()

  const ChamadaConsultaBaixa = async (): Promise<void> => {
    console.log('EXECUTEI CHAMADA')
    const configurationObject = {
      url: baseUrl,
      method: 'GET',
      params: { anoBaixa: Number(ano) }
    }
    setBaixas([])

    await axios(configurationObject)
      .then(response => {
        if (response.status === 200) {
          setBaixas(response.data)
        } else {
          throw new Error('Um erro ocorreu')
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error))
      })
  }

  useEffect(() => {
    ChamadaConsultaBaixa()
      .then(() => {})
      .catch(() => {})
  }, [])

  function RenderItens ({
    baixaId,
    exempId,
    funciId,
    motivo,
    desc,
    data
  }: ItemProps): ReactElement {
    return (
      <ContainerItem>
        <TitleBaixa style={{ textAlign: 'center' }}>
          {'Baixa ' + baixaId}
        </TitleBaixa>
        <TextBaixa>{'Exemplar ' + exempId}</TextBaixa>
        <TextBaixa>{'Funcionario ' + funciId}</TextBaixa>
        <TextBaixa>{motivo}</TextBaixa>
        <TextBaixa>{desc}</TextBaixa>
        <TextBaixa>{data.toLocaleString()}</TextBaixa>
      </ContainerItem>
    )
  }

  return (
    <BaseScreen
      hasScrollView
      headerProps={{
        title: 'Consultar Baixa p/Ano',
        showLeadingIcon: true,
        onPressLeadingIcon: () => {
          navigation.goBack()
        }
      }}>
      <>
        <DefaultTextField
          label="Digite o ano para consulta"
          type="default"
          onChange={text => {
            setAno(text)
          }}
          value={ano}
          maxLength={4}
          acitonExit={() => {
            ChamadaConsultaBaixa()
              .then(() => {})
              .catch(() => {})
          }}
          error={{
            message: 'Insira um ano valido para a consulta',
            hasError: anoLimit < Number(ano)
          }}
        />
        <Container>
          {baixas && (
            <FlatList
              ListEmptyComponent={
                <Text style={{ alignSelf: 'center' }}>
                  NÃO EXISTEM BAIXAS NO ANO INFORMADO
                </Text>
              }
              data={baixas}
              horizontal={false}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <RenderItens
                  baixaId={item.baixaId}
                  data={item.dataBaixa}
                  desc={item.baixaDesc}
                  exempId={item.exempId}
                  funciId={item.funciId}
                  motivo={item.motivoBaixa}
                />
              )}
            />
          )}
        </Container>
      </>
    </BaseScreen>
  )
}
