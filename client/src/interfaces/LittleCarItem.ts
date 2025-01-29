import Produto from "./Produto.ts"

interface LittleCarItem {
    id: number;
    produto: Produto;   
    quantidade: number;
}
export default LittleCarItem;