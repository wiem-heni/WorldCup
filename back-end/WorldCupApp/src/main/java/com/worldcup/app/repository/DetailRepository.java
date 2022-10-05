package com.worldcup.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.worldcup.app.entity.Detail;

public interface DetailRepository extends JpaRepository<Detail, Long>{
    boolean existsById(Long id);	

}
