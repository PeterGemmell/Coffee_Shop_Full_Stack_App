package com.example.coffeeshopapp.coffeeservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="date")
    private LocalDate date;

    @Column(name="is_completed")
    private String isCompleted;

    @JsonIgnoreProperties(value="orders")
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @ManyToMany
    @JoinTable(
            name = "orders_coffees",
            joinColumns = {@JoinColumn(name="order_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="coffee_id", nullable = false, updatable = false)}
    )

    private List<Coffee> coffees;


    public Order(Customer customer, String isCompleted){
        this.date = LocalDate.now();
        this.customer = customer;
        this.isCompleted = isCompleted;
        this.coffees = new ArrayList<>();
    }

    public Order(){

    }

    public void addCoffee(Coffee coffee){
        this.coffees.add(coffee);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getIsCompleted() {
        return isCompleted;
    }

    public void setIsCompleted(String isCompleted) {
        this.isCompleted = isCompleted;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Coffee> getCoffees() {
        return coffees;
    }

    public void setCoffees(List<Coffee> coffees) {
        this.coffees = coffees;
    }
}
