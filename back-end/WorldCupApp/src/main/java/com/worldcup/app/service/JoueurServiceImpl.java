package com.worldcup.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.worldcup.app.entity.Joueur;
import com.worldcup.app.repository.EquipeRepository;
import com.worldcup.app.repository.JoueurRepository;
import com.worldcup.app.responces.MessageResponse;

@Service	
public class JoueurServiceImpl implements JoueurService {
	
	@Autowired
	JoueurRepository joueurRepository;
	@Autowired
	EquipeRepository equipeRepository;

    @Transactional
    @Override
    public MessageResponse save(Joueur joueur) {
    	joueurRepository.save(joueur);
        return new MessageResponse(true,"Succès","Opération réalisée avec succès.");
    }
    
    @Override
    public List<Joueur> findAll() {
        return joueurRepository.findAll();
    }

	@Override
	public Joueur findById(long id) {
		return joueurRepository.getById(id);
	}
    
	@Transactional
	@Override
	public MessageResponse update(Joueur joueur) {
    	 boolean existe = joueurRepository.existsById(joueur.getId());
	        if (!existe){
	            return new MessageResponse(false,"Echec !","Ce joueur n'existe pas  !");
	        }
	        /*if (joueur.getEquipe() == null) 
	          	return new MessageResponse(false, "Echec !", "L'equipe du joueur est vide !");
	         boolean existe2 = equipeRepository.existsById(joueur.getEquipe().getId());
	          if (!existe2)
	          	return new MessageResponse(false, "Echec !", "L'equipe du joueur n'existe pas !");*/
	        joueurRepository.save(joueur);
	        return new MessageResponse(true,"Succès","Opération réalisée avec succès.");
	}
    
    @Transactional
	@Override
	public MessageResponse delete(Long id) {
    	Joueur joueur = findById(id);
        if (joueur==null){
            return new MessageResponse(false,"Echec","Cet enregistrement n'existe pas !");
        }
        joueurRepository.delete(joueur);
        return new MessageResponse(true,"Succès", "L'enregistrement à été supprimé avec succès.");
	}
	
	
}
