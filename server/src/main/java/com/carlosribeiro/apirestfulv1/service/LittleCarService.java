package com.carlosribeiro.apirestfulv1.service;

import com.carlosribeiro.apirestfulv1.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.apirestfulv1.model.LittleCar;
import com.carlosribeiro.apirestfulv1.model.LittleCarItem;
import com.carlosribeiro.apirestfulv1.repository.LittleCarRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LittleCarService {

    @Autowired
    private LittleCarRepository littleCarRepository;

    /**
     * @param id
     * @return
     * @throws EntidadeNaoEncontradaException
     */
    public List<LittleCarItem> recuperarItensDoCarrinho(Long id) {
        LittleCar carrinho = littleCarRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Carrinho não encontrado com ID: " + id));
        return carrinho.getItems();
    }

    /**
     * @param carrinho
     * @return
     */
    public LittleCar cadastrarCarrinho(LittleCar carrinho) {
        return littleCarRepository.save(carrinho);
    }

    /**
     * @param carrinho
     * @return
     * @throws
     */
    @Transactional
    public LittleCar alterarCarrinho(LittleCar carrinho) {
        littleCarRepository.findById(carrinho.getId())
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Carrinho número " + carrinho.getId() + " não encontrado."));
        return littleCarRepository.save(carrinho);
    }


    /**
     * @param id
     * @throws EntidadeNaoEncontradaException
     */
    public void removerCarrinho(Long id) {
        if (!littleCarRepository.existsById(id)) {
            throw new EntidadeNaoEncontradaException("Carrinho número " + id + " não encontrado.");
        }
        littleCarRepository.deleteById(id);
    }
}
