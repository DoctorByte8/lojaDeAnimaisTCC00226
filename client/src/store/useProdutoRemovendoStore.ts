import Produto from "../interfaces/Produto.ts";
import {create} from "zustand/index";

interface ProdutoRemovendoStore {
    produtoRemovendo: Produto;

    setProdutoRemovendo: (produto: Produto) => void;
}

const useProdutoRemovendoStore = create<ProdutoRemovendoStore>((set) => ({

    produtoRemovendo: {} as Produto,

    setProdutoRemovendo: (novoProdutoRemovendo: Produto) => set(() => ({produtoRemovendo: novoProdutoRemovendo})),
}))
export default useProdutoRemovendoStore;