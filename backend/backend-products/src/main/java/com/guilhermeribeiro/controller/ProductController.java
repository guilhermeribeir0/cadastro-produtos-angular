package com.guilhermeribeiro.controller;

import com.guilhermeribeiro.model.Product;
import com.guilhermeribeiro.model.ProductDTO;
import com.guilhermeribeiro.repository.ProductRepository;
import com.guilhermeribeiro.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/products")
@AllArgsConstructor
public class ProductController {

    @Autowired
    private final ProductService productService;

    @GetMapping
    public List<Product> productList() {
        return productService.productList();
    }

    @PostMapping
    public @ResponseBody ResponseEntity<Void> create(@RequestBody ProductDTO productDTO) {
        productService.createNewProduct(productDTO);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

}
