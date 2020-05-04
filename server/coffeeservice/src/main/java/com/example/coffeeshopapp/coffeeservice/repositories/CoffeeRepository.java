package com.example.coffeeshopapp.coffeeservice.repositories;

import com.example.coffeeshopapp.coffeeservice.models.Coffee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoffeeRepository extends JpaRepository<Coffee, Long> {
}
