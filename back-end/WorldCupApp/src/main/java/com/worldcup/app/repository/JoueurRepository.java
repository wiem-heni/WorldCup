package com.worldcup.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.worldcup.app.entity.Joueur;

@Repository
public interface JoueurRepository extends JpaRepository<Joueur, Long> {
	
	public Joueur findById(long id);
	
}
