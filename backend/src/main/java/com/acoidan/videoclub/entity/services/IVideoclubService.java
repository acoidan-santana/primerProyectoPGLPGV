package com.acoidan.videoclub.entity.services;

import java.util.List;

import com.acoidan.videoclub.entity.models.Videoclub;


public interface IVideoclubService {
	public List<Videoclub> getAll();
	
	public Videoclub get(long id);
	
	public void addVideoclub(Videoclub videoclub);
	
	public void deleteVideoclub(long id);
	
	public void updateVideoclub(Videoclub videoclub, long id);
	
}
