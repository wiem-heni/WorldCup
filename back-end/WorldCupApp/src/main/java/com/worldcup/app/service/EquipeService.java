package com.worldcup.app.service;

import java.util.List;

import com.worldcup.app.entity.Equipe;
import com.worldcup.app.responces.MessageResponse;

public interface EquipeService {
	public MessageResponse save(Equipe equipe);
	public MessageResponse update(Equipe equipe);
	public List<Equipe> findAll();
	public Equipe findById(long id);
	 public MessageResponse delete(Long id);
}
