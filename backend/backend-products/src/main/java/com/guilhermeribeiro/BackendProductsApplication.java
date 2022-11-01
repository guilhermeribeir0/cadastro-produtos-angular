package com.guilhermeribeiro;

import com.guilhermeribeiro.model.Product;
import com.guilhermeribeiro.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
public class BackendProductsApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendProductsApplication.class, args);
	}

}
