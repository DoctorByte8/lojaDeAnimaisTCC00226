package com.carlosribeiro.apirestfulv1.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class LittleCarItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "O produto deve ser informado.")
    @ManyToOne(fetch = FetchType.EAGER)
    private Produto produto;

    @Min(value = 1, message = "A quantidade deve ser pelo menos 1.")
    private int quantidade;

    public LittleCarItem(Produto produto, int quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
}
