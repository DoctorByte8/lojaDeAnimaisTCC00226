import { useParams } from "react-router-dom";
import useProdutosPorNomeDaCategoria from "../hooks/useProdutosPorNomeDaCategoria";
import Card from "../components/Card";

const primeiraLetraMaiuscula = (palavra: string) => {
  return palavra.charAt(0).toUpperCase() + palavra.slice(1);
};
const CardsDeProdutosPage = () => {
  const { nomeCategoria } = useParams();
  const {
    data: produtos,
    isPending: carregandoProdutos,
    error: errorProdutos,
  } = useProdutosPorNomeDaCategoria(nomeCategoria);

  if (carregandoProdutos) return <h6>Carregando...</h6>;
  if (errorProdutos) throw errorProdutos;

  return (
    <>
      <h5>
        {nomeCategoria ? primeiraLetraMaiuscula(nomeCategoria) : "Produtos"}
      </h5>
      <div className="row">
        {produtos.map((produto) => (
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <Card
              imagem={produto.imagem}
              titulo={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}
              footer={
                <input
                  type="button"
                  className="btn btn-primary btn-sm w-100"
                  value="Comprar"
                />
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default CardsDeProdutosPage;
