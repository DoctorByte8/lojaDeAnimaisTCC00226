import { useMutation, useQueryClient } from "@tanstack/react-query";
import { URL_CARRINHO } from "../util/constants";
import useAPI from "./useAPI";
import LittleCar from "../interfaces/LittleCar";

const useAlterarCarrinho = () => {
  const { alterar } = useAPI<LittleCar>(URL_CARRINHO); // Especifica o tipo genérico LittleCar
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (carrinho: LittleCar) => alterar(carrinho),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["carrinho"], // Invalida a cache do carrinho após sucesso
      }),
  });
};

export default useAlterarCarrinho;
