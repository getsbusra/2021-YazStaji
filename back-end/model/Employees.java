package com.example.staj.model;

import java.util.List;


import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@AllArgsConstructor
@Document(collection = "employees")
@RequestMapping("/api/employees")
public class Employees {
	
	
	@Field(name = "last_name")
	private String last_name;
	
	@Field(name = "first_name")
	private String first_name;
	
	@Field(name = "title")
	private String title;
	
	@Field(name = "birth_date")
	private String birth_date;
	
	@Field(name = "hire_date")
	private String hire_date;
	
	@Field(name = "address")
	private String address;
	
	@Field(name = "city")
	private String city;
	
	@Field(name = "region")
	private String region;
	
	@Field(name = "postal_code")
	private String postal_code;
	
	@Field(name = "country")
	private String country;
	
	@Field(name = "home_phone")
	private String home_phone;
	
	@Field(name = "notes")
	private String notes;
	
	private List<Orders> orders;
	
	
	

}
