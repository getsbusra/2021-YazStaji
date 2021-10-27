package com.example.staj.model;


import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document(collection = "order_details")
public class OrderDetails {
	
	
	@Field(name = "unit_price")
	private double unit_price;
	
	@Field(name = "quantity")
	private int quantity;
	
	@Field(name = "discount")
	private boolean discount;

}
