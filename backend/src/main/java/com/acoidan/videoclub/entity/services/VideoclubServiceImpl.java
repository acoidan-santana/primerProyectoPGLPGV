package com.acoidan.videoclub.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acoidan.videoclub.entity.dao.IVideoclubDao;
import com.acoidan.videoclub.entity.models.Videoclub;

@Service
public class VideoclubServiceImpl implements IVideoclubService{

	@Autowired
	IVideoclubDao videoclubDao;

	@Override
	public List<Videoclub> getAll() {
		return (List<Videoclub>) videoclubDao.findAll();
	}
	
	@Override
	public Videoclub get(long id) {
		return videoclubDao.findById(id).get();
	}

	@Override
	public void addVideoclub(Videoclub videoclub) {
		videoclubDao.save(videoclub);
		
	}

	@Override
	public void deleteVideoclub(long id) {
		videoclubDao.deleteById(id);
		
	}

	@Override
	public void updateVideoclub(Videoclub videoclub, long id) {
		Optional<Videoclub> v = videoclubDao.findById(id);
		
		if (v.isPresent()) {
			videoclub.setId(id);
			videoclubDao.save(videoclub);
		}
		
	}
	

}
