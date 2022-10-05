package com.worldcup.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.worldcup.app.entity.AppUser;

@RepositoryRestResource
public interface AppUserRepository extends JpaRepository<AppUser,Long> {
    public AppUser findByUsername(String username);
}
