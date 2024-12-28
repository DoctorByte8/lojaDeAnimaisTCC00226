import { create } from "zustand";

interface OrderStore {
    atribute: string;
    order: string;
    campo: string;
    
    setOrder: (atribute: string, order: string) => void;
}

const useOrderStore = create<OrderStore>((set) => ({

    atribute: "Id",
    order: "desc",
    campo: "id",
    
    setOrder: (atribute: string, order: string) => {
        const getCampo = (atributo: string) => {
            switch (atributo) {
                case "Id": return "id";
                case "Nome": return "nome";
                case "Categoria": return "categoria";
                case "Data de Cadastro": return "dataCadastro";
            }
        };

        const campo = getCampo(atribute);
        set({ atribute, order, campo});






    }
}))
export default useOrderStore;