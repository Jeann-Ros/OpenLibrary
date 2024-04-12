import {atom} from 'jotai';

export interface User {
  usu_nome: string;
  usu_cpf: string;
  usu_nascimento: Date;
  usu_contato: {telefone?: string; email?: string};
  categorias: number[];
}

export default function UserBuilder(
  nome: string,
  cpf: string,
  dataNasc: Date,
  meioContato: string,
  categoriasFav: number[],
): User {
  console.log(meioContato.indexOf('@'));

  return {
    usu_nome: nome,
    usu_cpf: cpf,
    usu_nascimento: dataNasc,
    usu_contato:
      meioContato.indexOf('@') != -1
        ? {email: meioContato}
        : {telefone: meioContato},
    categorias: categoriasFav,
  };
}

export const usuarioAtom = atom<User[]>([]);
