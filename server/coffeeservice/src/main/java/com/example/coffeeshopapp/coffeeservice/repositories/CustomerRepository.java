package com.example.coffeeshopapp.coffeeservice.repositories;

import com.example.coffeeshopapp.coffeeservice.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Customer findByUserNameAndPassword(String userName, String password);
}
