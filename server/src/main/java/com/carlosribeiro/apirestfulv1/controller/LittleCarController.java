package com.carlosribeiro.apirestfulv1.controller;

import com.carlosribeiro.apirestfulv1.model.LittleCarItem;
import com.carlosribeiro.apirestfulv1.model.LittleCar;
import com.carlosribeiro.apirestfulv1.service.LittleCarService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("carrinho")
public class LittleCarController {

    @Autowired
    LittleCarService littleCarService;

    @GetMapping("{idCarrinho}")
    public List<LittleCarItem> recuperarCarrinho(@PathVariable("idCarrinho") Long id) {
        return littleCarService.recuperarItensDoCarrinho(id);
    }

    @PostMapping
    public LittleCar cadastrarCarrinho(@RequestBody LittleCar carrinho) {
        return littleCarService.cadastrarCarrinho(carrinho);
    }

    @PutMapping
    public LittleCar alterarCarrinho(@RequestBody LittleCar carrinho) {
        return littleCarService.alterarCarrinho(carrinho);
    }

    @DeleteMapping("{idCarrinho}")
    public void removerCarrinho(@PathVariable("idCarrinho") long id) {
        littleCarService.removerCarrinho(id);
    }
}
