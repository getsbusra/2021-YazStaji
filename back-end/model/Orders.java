package com.example.staj.model;

import java.util.List;


import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document(collection = "orders")
public class Orders {

	
	
	@Field(name = "order_date")
	private String order_date;
	
	@Field(name = "required_date")
	private String required_date;
	
	@Field(name = "shipped_date")
	private String shipped_date;
	
	@Field(name = "ship_via")
	private String ship_via;
	
	@Field(name = "ship_name")
	private String ship_name;
	
	@Field(name = "ship_address")
	private String ship_address;
	
	@Field(name = "ship_city")
	private String ship_city;
	
	@Field(name = "ship_region")
	private String ship_region;
	
	@Field(name = "ship_postal_code")
	private String ship_postal_code;
	
	@Field(name = "ship_country")
	private String ship_country;
	
	private List<OrderDetails> orderDetails;
	
	

}
