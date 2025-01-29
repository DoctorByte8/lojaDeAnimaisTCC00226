package com.carlosribeiro.apirestfulv1.repository;

import com.carlosribeiro.apirestfulv1.model.LittleCar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LittleCarRepository extends JpaRepository<LittleCar, Long> {}
