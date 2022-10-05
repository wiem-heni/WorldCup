package com.worldcup.app.service;

import java.util.List;

import com.worldcup.app.entity.Mach;
import com.worldcup.app.responces.MessageResponse;

public interface MatchService {
	public MessageResponse save(Mach mach);
	public MessageResponse update(Mach mach);
	 public MessageResponse delete(Long id);
	public List<Mach> findAll();
	public Mach findById(long id);
}
