interface Livro {
  nomeLivro: string;
  anoLancamento: number;
  categoria: number;
  quantidadeLivro: number;
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
    nomeLivro: nomeLivro,
    anoLancamento: anoLancamentoAux,
    quantidadeLivro: quantidadeLivroAux,
    categoria: categoria,
  };
}
