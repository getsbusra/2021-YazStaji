package com.example.staj.controller;



import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.staj.model.Customers;
import com.example.staj.service.CustomersService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class CustomersController {
	
    @Autowired
	private CustomersService customersService;
    
    @GetMapping("/customers")
	public List<Customers> getAllCustomers(){
		return customersService.getAllCustomers();
	}
    
    @PostMapping("/customers")
	public Customers createCustomers(@RequestBody Customers customers) {
		return customersService.createCustomers(customers);
	}
    
    @GetMapping("/customers/{id}")
	public ResponseEntity<Customers> getCustomersById(@PathVariable String id) {
	return customersService.getCustomersById(id);
	}
    
    @PutMapping("/customers/{id}")
	public ResponseEntity<Customers> updateCustomers(@PathVariable String id, @RequestBody Customers customersDetails){
	  return customersService.updateCustomers(id, customersDetails);
	}
    
    @DeleteMapping("/customers/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCustomers(@PathVariable String id){
         return customersService.deleteCustomers(id);
	}
	
	
}
