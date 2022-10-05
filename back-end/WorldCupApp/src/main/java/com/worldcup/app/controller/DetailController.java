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

import com.worldcup.app.entity.Detail;
import com.worldcup.app.responces.MessageResponse;
import com.worldcup.app.service.DetailServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/detail")
public class DetailController {
	@Autowired
	DetailServiceImpl detailServiceImpl;
	

	@GetMapping
    public List<Detail> findAll() {
        return detailServiceImpl.findAll();
    }
    
    @PostMapping
    public MessageResponse save(@RequestBody Detail detail) {
        return detailServiceImpl.save(detail);
    }

    @PutMapping
    public MessageResponse update(@RequestBody Detail detail) {
        return detailServiceImpl.update(detail);
    }

   @GetMapping("/{code}")
    public Detail findById(@PathVariable("code") Long id) {
        return detailServiceImpl.findById(id);
    }

    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable Long id) {
        return detailServiceImpl.delete(id);
    }
	
}
