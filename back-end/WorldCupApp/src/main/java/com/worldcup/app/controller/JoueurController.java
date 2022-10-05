package com.worldcup.app.controller;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.worldcup.app.entity.AppUser;
import com.worldcup.app.entity.Joueur;
import com.worldcup.app.responces.MessageResponse;
import com.worldcup.app.service.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/joueur")
public class JoueurController {
	
	@Autowired
	JoueurService joueurService;
	
	@GetMapping
    public List<Joueur> findAll() {
        return joueurService.findAll();
    }
	
	@GetMapping("/{id}")
    public Joueur findById(@PathVariable Long id) {
        return joueurService.findById(id);
    }
	
	@PostMapping
	public void save(@RequestBody Joueur joueur) {
		joueurService.save(joueur);
	}
	
	@PutMapping
    public MessageResponse update(@RequestBody Joueur joueur) {
        return joueurService.update(joueur);
    }
	
	@PutMapping("/uploadPhoto")
    public void uploadPhoto(MultipartFile file, @RequestParam("id") long id) throws Exception{
    	if(joueurService.findById(id)!=null) {
    		Joueur joueur = joueurService.findById(id);
    	    joueur.setImage(file.getOriginalFilename());
    	    Files.write(Paths.get(System.getProperty("user.home")+"/OneDrive/Bureau/VehiclesOntology/images/user/"+joueur.getImage()),file.getBytes());
    	    joueurService.save(joueur);
    	}
    }
    
    @GetMapping(path="/image/{id}",produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getPhoto(@PathVariable("id") long id) throws Exception{
    	if(joueurService.findById(id)!=null) {
    		Joueur joueur = joueurService.findById(id);
    		return Files.readAllBytes(Paths.get(System.getProperty("user.home")+"/OneDrive/Bureau/VehiclesOntology/images/user/"+joueur.getImage()));
    	}
    	return null;
    }
	
}
