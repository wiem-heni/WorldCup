package com.worldcup.app.service;

import java.util.List;

import com.worldcup.app.entity.Detail;
import com.worldcup.app.responces.MessageResponse;

public interface DetailService {
	public MessageResponse save(Detail detail);
	public MessageResponse update(Detail detail);
	public List<Detail> findAll();
	public Detail findById(long id);
	 public MessageResponse delete(Long id);
}
