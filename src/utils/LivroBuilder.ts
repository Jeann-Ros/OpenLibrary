import {atom} from 'jotai';

export interface Livro {
  livro_nome: string;
  lanca_ano: Date;
  livro_categoria: number;
  livro_paginas: number;
  livro_editora: string;
}

export default function LivroBuilder(
  nomeLivro: string,
  anoLancamento: Date,
  categoria: number,
  quantidadeLivro: string,
): Livro {
  let quantidadeLivroAux = parseInt(quantidadeLivro);

  return {
    livro_nome: nomeLivro,
    lanca_ano: anoLancamento,
    livro_paginas: quantidadeLivroAux,
    livro_categoria: categoria,
    livro_editora: 'Editora Abreu',
  };
}

export const livroAtom = atom<string>('');
