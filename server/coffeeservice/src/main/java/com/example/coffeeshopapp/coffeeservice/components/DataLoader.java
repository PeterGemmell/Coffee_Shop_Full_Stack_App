package com.example.coffeeshopapp.coffeeservice.components;


import com.example.coffeeshopapp.coffeeservice.models.Coffee;
import com.example.coffeeshopapp.coffeeservice.models.Customer;
import com.example.coffeeshopapp.coffeeservice.models.Order;
import com.example.coffeeshopapp.coffeeservice.repositories.CoffeeRepository;
import com.example.coffeeshopapp.coffeeservice.repositories.CustomerRepository;
import com.example.coffeeshopapp.coffeeservice.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CoffeeRepository coffeeRepository;

    public DataLoader(){
    }

    public void run(ApplicationArguments args){

     Customer customer1 = new Customer("Peter", "Gemmell", "PeteG", "info@thegentlemanselect.com", "MaMax");
     customerRepository.save(customer1);

        Coffee coffee1 = new Coffee("Lavazza", "Crema e Gusto", "South America", "Robusta","https://pepperyspot.com/wp-content/uploads/2017/12/lavazza-crema-e-gusto.jpg", 3.00, 6.50, "Creamy and full bodied. Intense and well balanced aroma, full bodied, and fragrant flavour, rich aftertaste with chocolaty notes.", 0, false);
        coffeeRepository.save(coffee1);

        Coffee coffee2 = new Coffee("Douwe Egberts", "Paloma Merido Aroma", "South America", "Arabica","https://pepperyspot.com/wp-content/uploads/2017/12/paloma-merido-aroma.jpg", 2.00, 4.00, "A cup of irresistible aroma, Merido Aroma Coffee, creates a fun atmosphere in everyday life. Have a coffee break and refresh yourself with a really soft, refreshing aroma of coffee.", 0, false);
        coffeeRepository.save(coffee2);

        Coffee coffee3 = new Coffee("Bravos", "Classic Ground", "Africa", "Robusta","https://pepperyspot.com/wp-content/uploads/2019/10/bravos-classic-ground-1000.jpg", 2.00, 8.50, "Bravos Classic is for those who prefer a traditional, well beloved taste, to prepare a long black or an espresso, with or without milk, in the morning or during the afternoon.", 0, false);
        coffeeRepository.save(coffee3);

        Coffee coffee4 = new Coffee("Davidoff", "Espresso 57 Intense", "South America", "Arabica","https://pepperyspot.com/wp-content/uploads/2017/12/davidoff-espresso-57-intense-250-ground.jpg", 3.00, 7.00, "A blend with the measured intensity required to fuel the lifestyle of the modern explorer.", 0, false);
        coffeeRepository.save(coffee4);

        Coffee coffee5 = new Coffee("Segafredo Zanetti", "Intermezzo Ground", "Italy", "Robusta","https://pepperyspot.com/wp-content/uploads/2017/12/segafredo-intermezzo-250.jpg", 1.00, 3.50, "Intermezzo is one of Segafredo’s oldest recipes, containing a blend of Arabica and Robusta making it an excellent coffee for any occasion.", 0, false);
        coffeeRepository.save(coffee5);

        Coffee coffee6 = new Coffee("Movenpick", "Der Milde", "Switzerland", "Arabica","https://pepperyspot.com/wp-content/uploads/2019/10/movenpick-der-milde-500.jpg", 3.00, 9.80, "Selected highland coffee beans from the best growing regions in the world and a gentle, slow roast ensure its exquisite aroma and its harmoniously balanced flavour.", 0, false);
        coffeeRepository.save(coffee6);

        Coffee coffee7 = new Coffee("Pellini", "Espresso Gusto Bar no 46", "Italy", "Arabica","https://pepperyspot.com/wp-content/uploads/2017/12/pellini-46-cremoso-250.jpg", 2.00, 6.15, "Well balanced and rounded. The medium roasting determines its great character and aromatic richness.", 0, false);
        coffeeRepository.save(coffee7);

        Coffee coffee8 = new Coffee("Tchibo", "Family Roasted", "Germany", "Robusta","https://pepperyspot.com/wp-content/uploads/2019/10/tchibo-family-500.jpg", 2.00, 5.40, "For over 60 years, the Tchibo coffee experts have been searching around the world for the best coffee varieties to make Tchibo coffee unique.", 0, false);
        coffeeRepository.save(coffee8);

        Coffee coffee9 = new Coffee("Jacobs", "Espresso 7 Classico", "Germany", "Arabica","https://pepperyspot.com/wp-content/uploads/2018/06/jacobs-espresso-7-classico-coffee-capsules.jpg", 1.50, 4.92, "The heart of this round espresso is the combination of high quality Arabica with intense Robusta. A pleasantly sweet taste experience with a balanced aroma.", 0, false);
        coffeeRepository.save(coffee9);

        Coffee coffee10 = new Coffee("Dallmayr", "Classic", "Germany", "Arabica","https://pepperyspot.com/wp-content/uploads/2017/12/Dallmayr-Classic-250.jpg", 2.00, 6.40, "Selected coffee varieties are refined using the Dallmayr coffee roasting process to create a top-class, premium coffee.", 0, false);
        coffeeRepository.save(coffee10);

        Coffee coffee11 = new Coffee("Senseo", "Mild Coffee Pods", "Holland", "Arabica","https://pepperyspot.com/wp-content/uploads/2017/12/mild-16.jpg", 1.50, 4.20, "A fine coffee with a fruity aftertaste.", 0, false);
        coffeeRepository.save(coffee11);

        Coffee coffee12 = new Coffee("Lavazza", "Qualita Oro", "Italy", "Arabica","https://pepperyspot.com/wp-content/uploads/2017/12/lavazza-qualita-oro-whole-bean-1000.jpg", 4.00, 14.50, "Qualita Oro is a selection of extraordinarily sweet, fine Arabica coffees. An intense, aromatic blend for true coffee connoisseurs.", 0, false);
        coffeeRepository.save(coffee12);

        Coffee coffee13 = new Coffee("Eduscho", "Wiener Extra", "Germany", "Robusta","https://pepperyspot.com/wp-content/uploads/2019/10/wiener-extra-1000.jpg", 3.50, 8.60, "We recommend Eduscho Wiener Extra for who likes strong, full flavor coffee.", 0, false);
        coffeeRepository.save(coffee13);

        Coffee coffee14 = new Coffee("Douwe Egberts", "Paloma Ground Coffee", "South America", "Robusta","https://pepperyspot.com/wp-content/uploads/2017/12/paloma-classic-225.jpg", 1.50, 4.00, "Douwe Egberts Paloma is made with strong flavors of robusta coffee.", 0, false);
        coffeeRepository.save(coffee14);

        Coffee coffee15 = new Coffee("Lavazza", "Il Mattino", "Italy", "Arabica","https://pepperyspot.com/wp-content/uploads/2018/05/lavazza-il-mattino.jpg", 2.00, 4.50, "Grain for the production of quality Italian coffee is harvested on the best plantations of India and South America.", 0, false);
        coffeeRepository.save(coffee15);

        Coffee coffee16 = new Coffee("La Coppa", "Espresso Plant Based Capsules", "Italy", "Arabica","https://pepperyspot.com/wp-content/uploads/2019/10/la-coppa-espresso.jpg", 2.00, 5.14, "A mild espresso with a delicate hint of cedar wood and cereals.", 0, false);
        coffeeRepository.save(coffee16);

        Coffee coffee17 = new Coffee("Segafredo Zanetti", "Espresso Casa Ground", "Italy", "Arabica","https://pepperyspot.com/wp-content/uploads/2017/12/segafredo-espresso-casa-250.jpg", 2.00, 4.42, "Specially selected beans from the best varieties of Arabica and Robusta are grounded to perfection.", 0, false);
        coffeeRepository.save(coffee17);

        Coffee coffee18 = new Coffee("Tchibo", "Exclusive Ground Coffee", "Germany", "Arabica","https://pepperyspot.com/wp-content/uploads/2017/12/tchibo-exclusive.jpg", 2.20, 4.40, "Tchibo Exclusive offers the ultimate in true coffee enjoyment. Its delicate aroma and harmonic taste make it a special pleasure.", 0, false);
        coffeeRepository.save(coffee18);

        Coffee coffee19 = new Coffee("Movenpick", "El Autentico", "Switzerland", "Arabica","https://pepperyspot.com/wp-content/uploads/2019/10/movenpick-el-autentico-500.jpg", 3.50, 9.83, "El Autentico by Mövenpick gets its rich, well balanced flavour from exquisite, carefully processed highland coffee beans.", 0, false);
        coffeeRepository.save(coffee19);

        Coffee coffee20 = new Coffee("Davidoff", "Fine Aroma", "South America", "Arabica","https://pepperyspot.com/wp-content/uploads/2017/12/davidoff-fine-aroma-250-ground.jpg", 3.00, 7.00, "Welcome simplicity into your life with Fine Aroma. An uncomplicated coffee that prompts you to appreciate the consistency of its flavor.", 0, false);
        coffeeRepository.save(coffee20);



        Order order1 = new Order(customer1, "no");
        orderRepository.save(order1);
        order1.addCoffee(coffee1);
        order1.addCoffee(coffee2);

        orderRepository.save(order1);





    }
}
