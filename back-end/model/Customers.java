package com.example.staj.model;


import java.util.List;
import javax.persistence.Entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@Entity
@Document(collection ="customers")
@AllArgsConstructor
public class Customers {
	
	@Id
	private String id;
	
	@Field(name = "company_name")
	private String company_name;
	
	@Field(name = "contact_name")
	private String contact_name;
	
	@Field(name = "contact_title")
	private String contact_title;
	
	@Field(name = "address")
	private String address;
	
	@Field(name = "city")
	private String city;
	
	
	@Field(name = "postal_code")
	private String postal_code;
	
	@Field(name = "country")
	private String country;
	
	@Field(name = "phone")
	private String phone;
	
	@Field(name = "fax")
	private String fax;
	
    private List<Products> products;
	private List<Shippers> shippers;
	

}
