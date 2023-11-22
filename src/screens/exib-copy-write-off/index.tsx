import axios from 'axios'
import React, { useEffect, useState, type ReactElement } from 'react'
import { FlatList } from 'react-native'
import BaseScreen from '../../core/base-screen/base-screen'
import { UseNavigation } from '../../core/hooks/use-navigation'
import { Container, ContainerItem, TextBaixa, TitleBaixa } from './styled'

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
  const navigation = UseNavigation()
  const ipLocal = '192.168.15.5'
  const baseUrl = `http://${ipLocal}:8080/baixa/resgatar-baixa-ano`

  const ChamadaConsultaBaixa = async (): Promise<void> => {
    const configurationObject = {
      url: baseUrl,
      method: 'GET',
      params: { anoBaixa: 2023 }
    }

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
        <TitleBaixa>{'Baixa ' + baixaId}</TitleBaixa>
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
      <Container>
        {baixas && (
          <FlatList
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
            keyExtractor={baixaId => baixaId}
          />
        )}
      </Container>
    </BaseScreen>
  )
}
