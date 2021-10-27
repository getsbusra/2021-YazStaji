package com.example.staj.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.staj.exception.ResourceNotFoundException;
import com.example.staj.model.Customers;
import com.example.staj.repository.CustomersRepository;


@Service
public class CustomersService {
	

   @Autowired
   private CustomersRepository customersRepository;
 
   
   public CustomersService(CustomersRepository customersRepository) {
		super();
		this.customersRepository = customersRepository;
	}


	public Customers createCustomers(@RequestBody Customers customers) {
    	return customersRepository.save(customers);
		}
	 
	
    
    
   
	public List<Customers> getAllCustomers(){
		return customersRepository.findAll();
	}		
	
	
	
	public ResponseEntity<Customers> getCustomersById(@PathVariable String id) {
		Customers customers = customersRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(customers);
	}
	
	
	
	public ResponseEntity<Customers> updateCustomers(@PathVariable String id, @RequestBody Customers customersDetails){
		Customers customers = customersRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		 customers.setCompany_name(customersDetails.getCompany_name());
	  	 customers.setContact_name(customersDetails.getContact_name());
	  	 customers.setContact_title(customersDetails.getContact_title());
		 customers.setAddress(customersDetails.getAddress());
		 customers.setCity(customersDetails.getCity());
	  	 customers.setPostal_code(customersDetails.getPostal_code());
	  	 customers.setCountry(customersDetails.getCountry());
	  	 customers.setPhone(customersDetails.getPhone());
		 customers.setFax(customersDetails.getFax());
		
	     Customers updatedCustomers = customersRepository.save(customers);
		return ResponseEntity.ok(updatedCustomers);
	}
	
	
	public ResponseEntity<Map<String, Boolean>> deleteCustomers(@PathVariable String id){
		Customers customers = customersRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		customersRepository.delete(customers);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
	
	
	
	
	
	
	


