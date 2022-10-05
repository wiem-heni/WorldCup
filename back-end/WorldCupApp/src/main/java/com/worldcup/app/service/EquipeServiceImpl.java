package com.worldcup.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.worldcup.app.entity.Equipe;
import com.worldcup.app.repository.EquipeRepository;
import com.worldcup.app.responces.MessageResponse;

@Service
public class EquipeServiceImpl implements EquipeService {
	@Autowired
	EquipeRepository equipeRepository;
	
	@Transactional
	@Override
	public MessageResponse save(Equipe equipe) {
		equipeRepository.save(equipe);
        return new MessageResponse(true,"Succès","Opération réalisée avec succès.");
	}
	@Transactional
	@Override
	public MessageResponse update(Equipe equipe) {
		 boolean existe = equipeRepository.existsById(equipe.getId());
	        if (!existe){
	            return new MessageResponse(false,"Echec !","Cette equipe n'existe pas  !");
	        }
	        equipeRepository.save(equipe);
	        return new MessageResponse(true,"Succès","Opération réalisée avec succès.");
	}
	@Transactional
	@Override
	public List<Equipe> findAll() {
		return equipeRepository.findAll();

	}
	@Transactional
	@Override
	public Equipe findById(long id) {
		Equipe equipe = equipeRepository.findById(id).orElse(null);
        return equipe;
	}
	@Transactional
	@Override
	public MessageResponse delete(Long id) {
		Equipe equipe = findById(id);
        if (equipe==null){
            return new MessageResponse(false,"Echec","Cet enregistrement n'existe pas !");
        }
        equipeRepository.delete(equipe);
        return new MessageResponse(true,"Succès", "L'enregistrement à été supprimé avec succès.");
	}

}
