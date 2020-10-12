package com.acoidan.videoclub.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.acoidan.videoclub.entity.models.Videoclub;

public interface IVideoclubDao extends CrudRepository<Videoclub, Long> {

}
