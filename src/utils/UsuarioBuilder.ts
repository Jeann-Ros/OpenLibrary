interface User {
  nome: string;
  cpf: string;
  dataNasc: Date;
  meioContato: string;
  categoriasFav: string[];
}

export default function UserBuilder(
  nome: string,
  cpf: string,
  dataNasc: Date,
  meioContato: string,
  categoriasFav: string[],
): User {
  return {
    nome: nome,
    cpf: cpf,
    dataNasc: dataNasc,
    meioContato: meioContato,
    categoriasFav: categoriasFav,
  };
}
