

import {useQuery} from "@tanstack/react-query";

import useAPI from "./useAPI.ts";
import Produto from "../interfaces/Produto.ts";
import {URL_PRODUTOS} from "../util/constants.ts";





const useProdutoSingular = (idSelecionado: string) => {

    //console.log(idSelecionado);
    const { recuperarid } = useAPI<Produto>(URL_PRODUTOS);
    return useQuery({
        queryKey: idSelecionado ? [idSelecionado] : [""],
        queryFn: () => recuperarid(parseInt(idSelecionado)),
        staleTime: 10_000,
    });}
/*
const useProdutoSingular = () => {

    const {recuperarid} = useAPI<Produto>(URL_PRODUTOS);
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => recuperarid(id),
        // axios
        //   .delete("http://localhost:8080/produtos/" + id)
        //   .then((res) => res.data),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["produtos"],
            }),
    });
};
*/


export default useProdutoSingular;