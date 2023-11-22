type Props = {
  anoBaixa: number;
};

export default function BaixaAnoBuilder(anoBaixa: number): Props {
  return {
    anoBaixa: anoBaixa,
  };
}
