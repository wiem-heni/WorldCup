package com.worldcup.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.worldcup.app.entity.Mach;
@Repository
public interface MatchRepository extends JpaRepository<Mach, Long>{
    boolean existsById(Long id);	

}
