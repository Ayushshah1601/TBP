package com.auth.Signing;

import com.auth.Signing.BillingPackage.portaldb.service.BroadbandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//@EnableJpaRepositories(basePackageClasses = UserRepository.class)
@SpringBootApplication
public class SigningApplication {
	@Autowired
	private static BroadbandService broadbandService;


	public static void main(String[] args) {

		SpringApplication.run(SigningApplication.class, args);
		System.err.println("before entry of data");
		broadbandService.loaddatabase();
		System.err.println("after entry of data");

	}

}
