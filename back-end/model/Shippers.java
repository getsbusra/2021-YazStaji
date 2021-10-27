package com.example.staj.model;

import java.util.List;


import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document(collection = "shippers")
public class Shippers {
	
	
	@Field(name = "company_name")
	private String company_name;
	
	@Field(name = "phone")
	private String phone;
	
	private List<Orders> orders; 

}
