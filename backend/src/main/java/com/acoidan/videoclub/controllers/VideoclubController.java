package com.acoidan.videoclub.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acoidan.videoclub.entity.models.Videoclub;
import com.acoidan.videoclub.entity.services.IVideoclubService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class VideoclubController {

	@Autowired
	IVideoclubService videoclubService;
	
	@GetMapping("/api/videoclub")
	private List<Videoclub> getAll(){
		return videoclubService.getAll();
	}
	
	@GetMapping("/api/videoclub/{id}")
	private Videoclub findById(@PathVariable(value = "id") int id) {
		return videoclubService.get(id);
	}
	
	@PostMapping("/api//videoclub")
	private void addVideoclub(Videoclub videoclub) {
		videoclubService.addVideoclub(videoclub);
	}
	
	@DeleteMapping("/api/videoclub/{id}")
	private void deleteVideoclub(@PathVariable(value = "id") int id) {
		videoclubService.deleteVideoclub(id);
	}
	
	@PutMapping("/api/videoclub/{id}")
	private void updateVideoclub(@PathVariable(value = "id") int id, Videoclub videoclub) {
		videoclubService.updateVideoclub(videoclub, id);
	}
}
