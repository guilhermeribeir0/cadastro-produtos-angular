package com.guilhermeribeiro.controller;

import com.guilhermeribeiro.model.Product;
import com.guilhermeribeiro.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@AllArgsConstructor
public class ProductController {

    private final ProductRepository productRepository;

    @GetMapping(value = "/products")
    public List<Product> productList() {
        return productRepository.findAll();
    }

}
