package com.worldcup.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.worldcup.app.entity.Equipe;
import com.worldcup.app.entity.Joueur;
@Repository
public interface EquipeRepository extends JpaRepository<Equipe, Long>{
    boolean existsById(Long id);	

}
