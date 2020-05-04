package com.example.coffeeshopapp.coffeeservice.controllers;

import com.example.coffeeshopapp.coffeeservice.models.Coffee;
import com.example.coffeeshopapp.coffeeservice.repositories.CoffeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CoffeeController {

    @Autowired
    CoffeeRepository coffeeRepository;

    @GetMapping(value = "/coffees")
    public ResponseEntity<List<Coffee>> getAllCoffees(){
        return new ResponseEntity<>(coffeeRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/coffees/{id}")
    public ResponseEntity getCoffee(@PathVariable Long id){
        return new ResponseEntity<>(coffeeRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/coffees")
    public ResponseEntity<Coffee> postCoffee(@RequestBody Coffee coffee){
        coffeeRepository.save(coffee);
        return new ResponseEntity<>(coffee, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/coffees/{id}")
    public ResponseEntity<Coffee> updateCoffee(@RequestBody Coffee coffee){
        coffeeRepository.save(coffee);
        return new ResponseEntity<>(coffee, HttpStatus.OK);
    }

    @DeleteMapping(value = "/coffees/{id}")
    public ResponseEntity<Coffee> deleteCoffee(@PathVariable Long id){
        Coffee found = coffeeRepository.getOne(id);
        coffeeRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
