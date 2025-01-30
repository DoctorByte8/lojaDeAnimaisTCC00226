import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import useProdutosPaginadosPeloNomeDaCategoria from "../hooks/useProdutosPaginadosPeloNomeDaCategoria";
import Produto from "../interfaces/Produto";
import { useCarrinho } from "../context/CarrinhoContext";

const primeiraLetraMaiuscula = (palavra: string) => {
  return palavra.charAt(0).toUpperCase() + palavra.slice(1);
};

const CardsDeProdutosPage = () => {
  const tamanho = 18;
  const { nomeCategoria } = useParams();
  const navigate = useNavigate();
  const { adicionarAoCarrinho } = useCarrinho();

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
    <div>
      <h1>{primeiraLetraMaiuscula(nomeCategoria || "Produtos")}</h1>
      <InfiniteScroll
        dataLength={data?.pages.length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage || false}
        loader={<h4>Carregando mais...</h4>}
      ><div className="row">
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
                <button
                    onClick={() => {
                      adicionarAoCarrinho(produto);
                    }}
                    style={{
                      backgroundColor: "#28a745",
                      color: "#fff",
                      border: "none",
                      padding: "10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Comprar
                  </button>
              }
            />
          </div>
        ))
      )}
    </div>
      </InfiniteScroll>
    </div>
  );
};

export default CardsDeProdutosPage;
