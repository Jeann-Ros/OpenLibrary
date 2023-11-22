type Props = {
  exempId: string;
  funciId: string;
  motivoBaixa: string;
  descBaixa: string;
  dataBaixa: Date;
};

export default function BaixaBuilder(
  exempId: string,
  funcId: string,
  motivo: string,
  desc: string,
  data: Date,
): Props {
  return {
    exempId: exempId,
    funciId: funcId,
    motivoBaixa: motivo,
    descBaixa: desc,
    dataBaixa: data,
  };
}
