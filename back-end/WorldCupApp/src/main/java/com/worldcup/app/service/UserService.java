package com.worldcup.app.service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.worldcup.app.entity.AppUser;

@RepositoryRestResource
public interface UserService extends JpaRepository<AppUser, Integer>{
	
}
