package com.worldcup.app;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class WorldCupAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorldCupAppApplication.class, args);
	}	
	
    @Bean
    BCryptPasswordEncoder getBCPE(){
        return new BCryptPasswordEncoder();
    }
    @Configuration
    public class ApplicationConfig {

       @Bean
       public ModelMapper modelMapper() {
          ModelMapper modelMapper = new ModelMapper();
          return modelMapper;
       }
    }

}
