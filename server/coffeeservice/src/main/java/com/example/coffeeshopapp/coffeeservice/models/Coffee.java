package com.example.coffeeshopapp.coffeeservice.models;

import javax.persistence.*;

@Entity
@Table(name="coffees")
public class Coffee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="brand_name")
    private String brandName;

    @Column(name="product_name")
    private String productName;

    @Column(name="origin")
    private String origin;

    @Column(name="type_of_beans")
    private String typeOfBeans;

    @Column(name="image_link")
    private String imgLink;

    @Column(name="cost_price")
    private Double costPrice;

    @Column(name="retail_price")
    private Double retailPrice;

    @Column(name= "product_info")
    private String productInfo;


    public Coffee(String brandName, String productName, String origin, String typeOfBeans, String imgLink, Double costPrice, Double retailPrice, String productInfo){
        this.brandName = brandName;
        this.productName = productName;
        this.origin = origin;
        this.typeOfBeans = typeOfBeans;
        this.imgLink = imgLink;
        this.costPrice = costPrice;
        this.retailPrice = retailPrice;
        this.productInfo = productInfo;
    }

    public Coffee(){

    }


    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getTypeOfBeans() {
        return typeOfBeans;
    }

    public void setTypeOfBeans(String typeOfBeans) {
        this.typeOfBeans = typeOfBeans;
    }

    public String getImgLink() {
        return imgLink;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    public Double getCostPrice() {
        return costPrice;
    }

    public void setCostPrice(Double costPrice) {
        this.costPrice = costPrice;
    }

    public Double getRetailPrice() {
        return retailPrice;
    }

    public void setRetailPrice(Double retailPrice) {
        this.retailPrice = retailPrice;
    }

    public String getProductInfo() {
        return productInfo;
    }

    public void setProductInfo(String productInfo) {
        this.productInfo = productInfo;
    }
}
