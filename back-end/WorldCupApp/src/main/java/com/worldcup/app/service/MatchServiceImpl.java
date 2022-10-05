package com.worldcup.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.worldcup.app.entity.Mach;
import com.worldcup.app.repository.MatchRepository;
import com.worldcup.app.responces.MessageResponse;
@Service
public class MatchServiceImpl implements MatchService{
	@Autowired
	MatchRepository matchRepository;
	
	@Transactional
	@Override
	public MessageResponse save(Mach mach) {
		matchRepository.save(mach);
        return new MessageResponse(true,"Succès","Opération réalisée avec succès.");
	}
	@Transactional
	@Override
	public List<Mach> findAll() {
		return matchRepository.findAll();
	}
	@Transactional
	@Override
	public Mach findById(long id) {
		Mach mach = matchRepository.findById(id).orElse(null);
        return mach;
	}
	@Transactional
	@Override
	public MessageResponse update(Mach mach) {
		  boolean existe = matchRepository.existsById(mach.getId());
	        if (!existe){
	            return new MessageResponse(false,"Echec !","Ce match n'existe pas  !");
	        }
	        matchRepository.save(mach);
	        return new MessageResponse(true,"Succès","Opération réalisée avec succès.");

	}
	@Transactional
	@Override
	public MessageResponse delete(Long id) {
		Mach mach = findById(id);
        if (mach==null){
            return new MessageResponse(false,"Echec","Cet enregistrement n'existe pas !");
        }
        matchRepository.delete(mach);
        return new MessageResponse(true,"Succès", "L'enregistrement à été supprimé avec succès.");
	}

}
