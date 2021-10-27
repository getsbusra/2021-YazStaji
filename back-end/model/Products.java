package com.example.staj.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(collection = "products")
@AllArgsConstructor
public class Products {
	

    
	@Field(name = "product_name")
    private String product_name;
    
	@Field(name = "unit_price")
	private double unit_price;
    
	@Field(name = "units_in_stock")
	private short units_in_stock;
    
	@Field(name = "units_on_order")
    private int units_on_order;
    
	@Field(name = "reorder_level")
    private int reorder_level;
    
	@Field(name = "discontinued")
    private boolean discontinued;
    
    private List<OrderDetails> orderDetails;
    
    
    
	
}
