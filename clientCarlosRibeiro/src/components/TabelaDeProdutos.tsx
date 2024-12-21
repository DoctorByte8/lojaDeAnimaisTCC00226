import dayjs from "dayjs";
import useProdutosComPaginacao from "../hooks/useProdutosComPaginacao";
import useRemoverProduto from "../hooks/useRemoverProduto";
import useProdutosStore from "../store/useProdutosStore";

const TabelaDeProdutos = () => {
  const pagina = useProdutosStore((s) => s.pagina);
  const tamanho = useProdutosStore((s) => s.tamanho);
  const nome = useProdutosStore((s) => s.nome);

  const setPagina = useProdutosStore((s) => s.setPagina);
  const setProdutoSelecionado = useProdutosStore(
    (s) => s.setProdutoSelecionado
  );

  const {
    mutate: removerProduto,
    // isPending: removendoProduto,
    error: errorRemocaoProduto,
  } = useRemoverProduto();

  const {
    data: resultadoPaginado,
    isPending: carregandoProdutos,
    error: errorProdutos,
  } = useProdutosComPaginacao({ pagina, tamanho, nome });

  if (carregandoProdutos) return <h6>Carregando...</h6>;
  // if(removendoProduto) return <h6>Removendo...</h6>

  if (errorProdutos) throw errorProdutos;
  if (errorRemocaoProduto) throw errorRemocaoProduto;

  const produtos = resultadoPaginado.itens;

  const tratarRemocaoDeProduto = (id: number) => {
    removerProduto(id);
    setPagina(0);
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered table-sm">
        <thead>
          <tr>
            <th className="align-middle text-center">Id</th>
            <th className="align-middle text-center">Imagem</th>
            <th className="align-middle text-center">Categoria</th>
            <th className="align-middle text-center">Nome</th>
            <th className="align-middle text-center">Data de Cadastro</th>
            <th className="align-middle text-center">Quantidade</th>
            <th className="align-middle text-center">Preço</th>
            <th className="align-middle text-center">Ação</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td width={"7%"} className="align-middle text-center">
                {produto.id}
              </td>
              <td width={"13%"} className="align-middle text-center">
                <img src={produto.imagem} width="35px" />
              </td>
              <td width={"13%"} className="align-middle text-center">
                {produto.categoria.nome}
              </td>
              <td width={"20%"} className="align-middle ps-3">
                <a
                  onClick={() => setProdutoSelecionado(produto)}
                  className="link_underline"
                >
                  {produto.nome}
                </a>
              </td>
              <td width={"13%"} className="align-middle text-center">
                {dayjs(produto.dataCadastro).format("DD/MM/YYYY")}
              </td>
              <td width={"13%"} className="align-middle text-center">
                {produto.qtdEstoque}
              </td>
              <td width={"8%"} className="align-middle text-end pe-3">
                {produto.preco.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}
              </td>
              <td width={"13%"} className="align-middle text-center">
                <button
                  onClick={() => tratarRemocaoDeProduto(produto.id!)}
                  className="btn btn-danger btn-sm"
                  type="button"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="align-middle text-center fw-bold" colSpan={5}>
              Total...
            </td>
            <td className="align-middle text-center fw-bold" colSpan={2}>
              R${" "}
              {produtos
                .reduce(
                  (total, produto) =>
                    total + produto.qtdEstoque * produto.preco,
                  0
                )
                .toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default TabelaDeProdutos;
