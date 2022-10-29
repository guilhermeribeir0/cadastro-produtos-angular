package com.guilhermeribeiro;

import com.guilhermeribeiro.model.Product;
import com.guilhermeribeiro.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendProductsApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendProductsApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(ProductRepository productRepository) {
		return args -> {
			productRepository.deleteAll();

			Product product = new Product();
			product.setName("Mouse Gamer");
			product.setReference("HDJ584DG");
			product.setPrice(1499.99);

			productRepository.save(product);
		};
	}

}
