package com.carlosribeiro.apirestfulv1.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class LittleCar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "A lista de produtos não pode ser nula.")
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "cart_id") // Cria a chave estrangeira no LittleCarItem
    private List<LittleCarItem> items;

    public LittleCar(List<LittleCarItem> items) {
        this.items = items;
    }
}
