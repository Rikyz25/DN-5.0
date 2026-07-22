package com.library;

import com.library.entity.Book;
import com.library.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LibraryManagementBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(LibraryManagementBootApplication.class, args);
        System.out.println("==========================================================");
        System.out.println("Spring Boot REST Application Started Successfully on port 8080");
        System.out.println("==========================================================");
    }

    @Bean
    public CommandLineRunner seedDatabase(BookRepository bookRepository) {
        return args -> {
            System.out.println("Seeding database with book data...");
            bookRepository.save(new Book("The Hobbit", "J.R.R. Tolkien", "978-0261102217", 14.99));
            bookRepository.save(new Book("The Catcher in the Rye", "J.D. Salinger", "978-0316769174", 9.99));
            bookRepository.save(new Book("Fahrenheit 451", "Ray Bradbury", "978-1451673319", 11.25));
            System.out.println("Database seeding completed. " + bookRepository.count() + " books stored.");
        };
    }
}
