package com.example.staj.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.staj.model.Customers;

public interface CustomersRepository extends MongoRepository<Customers, String> {

}
