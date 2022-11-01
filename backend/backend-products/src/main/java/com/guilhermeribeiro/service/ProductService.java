package com.guilhermeribeiro.service;

import com.guilhermeribeiro.model.Product;
import com.guilhermeribeiro.model.ProductDTO;
import com.guilhermeribeiro.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> productList() {
        return productRepository.findAll();
    }
    public void createNewProduct(ProductDTO productDTO) {
        Product product = new Product();

        product.setName(productDTO.getName());
        product.setReference(productDTO.getReference());
        product.setPrice(productDTO.getPrice());

        productRepository.save(product);
    }
}
