package com.example.coffeeshopapp.coffeeservice.repositories;

import com.example.coffeeshopapp.coffeeservice.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
