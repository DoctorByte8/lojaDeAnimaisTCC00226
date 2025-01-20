import {create} from "zustand";

interface RandomStore {

    produtoremovido : boolean

    setProdutoremovido : (valor: boolean) => void
}

const useRandomStore = create<RandomStore>((set) => ({

    produtoremovido: false,


    setProdutoremovido: (valor: boolean) => set(() => ({ produtoremovido: valor })),
}));

export { useRandomStore };
