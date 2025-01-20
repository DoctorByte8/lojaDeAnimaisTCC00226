import InfiniteScroll from "react-infinite-scroll-component";
import {useNavigate, useParams} from "react-router-dom";
import Card from "../components/Card";
import useProdutosPaginadosPeloNomeDaCategoria from "../hooks/useProdutosPaginadosPeloNomeDaCategoria";

const primeiraLetraMaiuscula = (palavra: string) => {
  return palavra.charAt(0).toUpperCase() + palavra.slice(1);
};
const CardsDeProdutosPage = () => {
  const tamanho = 18;
  const { nomeCategoria } = useParams();
  const navigate = useNavigate(); // InstÃ¢ncia do navegador

  const {
    data,
    isPending: carregandoProdutos,
    error: errorProdutos,
    hasNextPage,
    fetchNextPage,
  } = useProdutosPaginadosPeloNomeDaCategoria({ tamanho, nomeCategoria });

  if (carregandoProdutos) return <h6>Carregando...</h6>;
  if (errorProdutos) throw errorProdutos;

  return (
    <InfiniteScroll 
      style={{height: "", overflow: ""}}
      dataLength={data.pages.reduce((total, page) => total + page.totalDeItens, 0)}
      hasMore={hasNextPage}
      loader={<h6>Carregando...</h6>}
      next={() => fetchNextPage()}>
      <h5>
        {nomeCategoria ? primeiraLetraMaiuscula(nomeCategoria) : "Produtos"}
      </h5>
      <div className="row">
        {data.pages.map((page) =>
          page.itens.map((produto) => (
            <div key={produto.id} onClick={() => navigate(`/produto/${produto.id}`)} className="col-xl-2 col-md-3 col-sm-4 col-6">
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
          ))
        )}
      </div>
    </InfiniteScroll>
  );
};
export default CardsDeProdutosPage;
