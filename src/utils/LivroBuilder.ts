interface Livro {
  livro_nome: string;
  livro_ano: number;
  livro_categoria: number;
  livro_autores: string[];
  livro_paginas: number;
  livro_editora: string;
}

export default function LivroBuilder(
  nomeLivro: string,
  anoLancamento: string,
  categoria: number,
  quantidadeLivro: string,
): Livro {
  let anoLancamentoAux = parseInt(anoLancamento);
  let quantidadeLivroAux = parseInt(quantidadeLivro);

  return {
    livro_nome: nomeLivro,
    livro_ano: anoLancamentoAux,
    livro_paginas: quantidadeLivroAux,
    livro_categoria: categoria,
    livro_autores: ['Henrique', 'Jean', 'Guilherme'],
    livro_editora: 'Trio Parada Dura',
  };
}
