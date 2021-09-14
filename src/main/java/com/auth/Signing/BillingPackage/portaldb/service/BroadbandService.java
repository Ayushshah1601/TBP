package com.auth.Signing.BillingPackage.portaldb.service;

import com.auth.Signing.BillingPackage.portaldb.entity.Broadband;
import com.auth.Signing.BillingPackage.portaldb.repository.BroadbandRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BroadbandService {
	@Autowired
	private BroadbandRepository repo;

	public List<Broadband> listAll() {
		return repo.findAll();
	}

	public void save(Broadband broadband) {
		repo.save(broadband);
	}

	public Broadband get(long id) {
		Optional<Broadband> br= Optional.of(repo.findById(id).get());
		return br.get();
	}

	public void delete(long id) {
		repo.deleteById(id);
	}

	@Autowired
	BroadbandRepository broadbandRepository;

	public void loaddatabase(){
		ObjectMapper mapper = new ObjectMapper();
		TypeReference<List<Broadband>> mapType = new TypeReference<List<Broadband>>() {};
		InputStream is = TypeReference.class.getResourceAsStream("/json/broadband.json");
		System.err.println("found the file");
		if(broadbandRepository.findAll().isEmpty()){
			try {
				List<Broadband> stateList = mapper.readValue(is, mapType);
				stateList.forEach(broadbandRepository::save);
				System.out.println("Broadband list saved successfully");
			} catch (IOException e) {
				System.out.println(e.getMessage());
			}
		}


	}

}
