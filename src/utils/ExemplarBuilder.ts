type Props = {
  livroId: string;
  statusExemp: string;
  exempEdicao: string;
  anoPublicacao: number;
  dataExemp: Date;
};

export default function ExemplarBuilder(
  livroId: string,
  statusExemp: string,
  exempEdicao: string,
  anoPublicacao: string,
  dataExemp: Date,
): Props {
  return {
    livroId: livroId,
    statusExemp: statusExemp,
    exempEdicao: exempEdicao,
    anoPublicacao: Number(anoPublicacao),
    dataExemp: dataExemp,
  };
}
