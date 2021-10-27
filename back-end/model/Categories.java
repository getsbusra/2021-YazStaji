package com.example.staj.model;



import java.util.List;



import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "categories")
public class Categories {
	
	
	@Field(name = "category_name")
	private String category_name;
	
	@Field(name = "description")
	private String description;
	
	private List<Products> products;
	
	

}
