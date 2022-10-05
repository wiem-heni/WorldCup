package com.worldcup.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.worldcup.app.entity.Detail;
import com.worldcup.app.entity.Joueur;
import com.worldcup.app.repository.DetailRepository;
import com.worldcup.app.repository.EquipeRepository;
import com.worldcup.app.repository.MatchRepository;
import com.worldcup.app.responces.MessageResponse;
@Service
public class DetailServiceImpl implements DetailService{
	@Autowired
	DetailRepository detailRepository;
	@Autowired
	EquipeRepository equipeRepository;
	@Autowired
	MatchRepository matchRepository;
	
	
	@Transactional
	@Override
	public MessageResponse save(Detail detail) {
		  if (detail.getEquipe() == null) 
	          	return new MessageResponse(false, "Echec !", "L'equipe du detail est vide !");
	         boolean existe = equipeRepository.existsById(detail.getEquipe().getId());
	          if (!existe)
	          	return new MessageResponse(false, "Echec !", "L'equipe du detail n'existe pas !");
	          
	          if (detail.getMach() == null) 
		          	return new MessageResponse(false, "Echec !", "Le match du detail est vide !");
		         boolean existe2 = matchRepository.existsById(detail.getMach().getId());
		          if (!existe2)
		          	return new MessageResponse(false, "Echec !", "Le match du detail n'existe pas !");
	          detailRepository.save(detail);
	          return new MessageResponse(true,"Succès","Opération réalisée avec succès.");
	}
	@Transactional
	@Override
	public MessageResponse update(Detail detail) {
		 boolean existe = detailRepository.existsById(detail.getId());
	        if (!existe){
	            return new MessageResponse(false,"Echec !","Ce detail n'existe pas  !");
	        }
	  	  if (detail.getEquipe() == null) 
	          	return new MessageResponse(false, "Echec !", "L'equipe du detail est vide !");
	         boolean existe3 = equipeRepository.existsById(detail.getEquipe().getId());
	          if (!existe3)
	          	return new MessageResponse(false, "Echec !", "L'equipe du detail n'existe pas !");
	          
	          if (detail.getMach() == null) 
		          	return new MessageResponse(false, "Echec !", "Le match du detail est vide !");
		         boolean existe2 = matchRepository.existsById(detail.getMach().getId());
		          if (!existe2)
		          	return new MessageResponse(false, "Echec !", "Le match du detail n'existe pas !");
	          detailRepository.save(detail);
	          return new MessageResponse(true,"Succès","Opération réalisée avec succès.");
	}
	@Transactional
	@Override
	public List<Detail> findAll() {
		return detailRepository.findAll();
	}
	@Transactional
	@Override
	public Detail findById(long id) {
		Detail detail = detailRepository.findById(id).orElse(null);
        return detail;	
	}
	@Transactional
	@Override
	public MessageResponse delete(Long id) {
	 	Detail detail = findById(id);
        if (detail==null){
            return new MessageResponse(false,"Echec","Cet enregistrement n'existe pas !");
        }
        detailRepository.delete(detail);
        return new MessageResponse(true,"Succès", "L'enregistrement à été supprimé avec succès.");
	
	}

}
