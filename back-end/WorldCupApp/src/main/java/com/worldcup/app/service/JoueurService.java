package com.worldcup.app.service;

import java.util.List;

import com.worldcup.app.entity.Joueur;
import com.worldcup.app.responces.MessageResponse;

public interface JoueurService {
	
	public MessageResponse save(Joueur joueur);	
	public List<Joueur> findAll();
	public Joueur findById(long id);
	public MessageResponse update(Joueur joueur);
	public MessageResponse delete(Long id);
	
}
