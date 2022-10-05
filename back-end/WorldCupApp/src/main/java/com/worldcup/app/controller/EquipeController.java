package com.worldcup.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.worldcup.app.entity.Equipe;
import com.worldcup.app.responces.MessageResponse;
import com.worldcup.app.service.EquipeServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/equipe")
public class EquipeController {
	@Autowired
	EquipeServiceImpl equipeServiceImpl;
	

	@GetMapping
    public List<Equipe> findAll() {
        return equipeServiceImpl.findAll();
    }
    
    @PostMapping
    public MessageResponse save(@RequestBody Equipe equipe) {
        return equipeServiceImpl.save(equipe);
    }

    @PutMapping
    public MessageResponse update(@RequestBody Equipe equipe) {
        return equipeServiceImpl.update(equipe);
    }

   @GetMapping("/{code}")
    public Equipe findById(@PathVariable("code") Long id) {
        return equipeServiceImpl.findById(id);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Long id) {
        return equipeServiceImpl.delete(id);
    }
	

}
