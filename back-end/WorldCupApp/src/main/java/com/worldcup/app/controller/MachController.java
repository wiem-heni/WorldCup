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

import com.worldcup.app.entity.Mach;
import com.worldcup.app.responces.MessageResponse;
import com.worldcup.app.service.MatchServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/mach")
public class MachController {
	@Autowired
	MatchServiceImpl matchServiceImpl;

	@GetMapping
    public List<Mach> findAll() {
        return matchServiceImpl.findAll();
    }
    
    @PostMapping
    public MessageResponse save(@RequestBody Mach mach) {
        return matchServiceImpl.save(mach);
    }

    @PutMapping
    public MessageResponse update(@RequestBody Mach mach) {
        return matchServiceImpl.update(mach);
    }

   @GetMapping("/{code}")
    public Mach findById(@PathVariable("code") Long id) {
        return matchServiceImpl.findById(id);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Long id) {
        return matchServiceImpl.delete(id);
    }
}
