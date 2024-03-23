interface User {
  nome: string;
  cpf: string;
  dataNasc: Date;
  meioContato: string;
}

export default function UserBuilder(
  nome: string,
  cpf: string,
  dataNasc: Date,
  meioContato: string,
): User {
  return {
    nome: nome,
    cpf: cpf,
    dataNasc: dataNasc,
    meioContato: meioContato,
  };
}
