package com.example.coffeeshopapp.coffeeservice;

import com.example.coffeeshopapp.coffeeservice.models.Coffee;
import com.example.coffeeshopapp.coffeeservice.models.Customer;
import com.example.coffeeshopapp.coffeeservice.models.Order;
import com.example.coffeeshopapp.coffeeservice.repositories.CoffeeRepository;
import com.example.coffeeshopapp.coffeeservice.repositories.CustomerRepository;
import com.example.coffeeshopapp.coffeeservice.repositories.OrderRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CoffeeserviceApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	CoffeeRepository coffeeRepository;

	@Autowired
	OrderRepository orderRepository;


	@Test
	void contextLoads() {
	}

	@Test
	public void canSaveCustomerDetailsToStore(){
		Customer customer1 = new Customer("Peter", "Gemmell", "PeteG", "info@thegentlemanselect.com", "MaMax");
		customerRepository.save(customer1);
	}

	@Test
	public void canSaveCoffeeToStock(){
		Coffee coffee1 = new Coffee("Lavazza", "Crema e Gusto", "South America", "Robusta","https://pepperyspot.com/wp-content/uploads/2017/12/lavazza-crema-e-gusto.jpg", 3.00, 6.50, "Creamy and full bodied. Intense and well balanced aroma, full bodied, and fragrant flavour, rich aftertaste with chocolaty notes.", 0, false);
		coffeeRepository.save(coffee1);
	}

//	@Test
//	public void canSaveAnOrderToStore(){
//		Order order1 = new Order("today", customer1);
//		orderRepository.save()
//
//	}


}
