package com.library;

import com.library.service.BookService;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import java.util.List;

public class LibraryManagementApplication {

    public static void main(String[] args) {
        System.out.println("======================================================================");
        System.out.println("Initializing Spring Application Context...");
        System.out.println("======================================================================");

        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("\n======================================================================");
        System.out.println("Verification 1: Testing Scanned Beans & Annotation-based DI (Exercise 6)");
        System.out.println("======================================================================");
        
        BookService scannedService = context.getBean(BookService.class);
        System.out.println("Successfully retrieved annotation-scanned 'bookService' bean.");
        
        System.out.println("Retrieving all books:");
        List<String> books = scannedService.getAllBooks();
        System.out.println("Current Library Books: " + books);
        
        System.out.println("\nAdding a new book to the library:");
        scannedService.addBook("Clean Code");
        System.out.println("Current Library Books: " + scannedService.getAllBooks());

        System.out.println("\n======================================================================");
        System.out.println("Verification 2: Testing Explicit XML Constructor Injection (Exercise 7)");
        System.out.println("======================================================================");
        
        BookService constructorInjectedService = (BookService) context.getBean("bookServiceConstructorInjection");
        System.out.println("Successfully retrieved 'bookServiceConstructorInjection' bean.");
        System.out.println("Books in constructor-injected service: " + constructorInjectedService.getAllBooks());

        System.out.println("\n======================================================================");
        System.out.println("Verification 3: Testing Explicit XML Setter Injection (Exercise 2 & 5 & 7)");
        System.out.println("======================================================================");
        
        BookService setterInjectedService = (BookService) context.getBean("bookServiceSetterInjection");
        System.out.println("Successfully retrieved 'bookServiceSetterInjection' bean.");
        System.out.println("Books in setter-injected service: " + setterInjectedService.getAllBooks());

        System.out.println("\n======================================================================");
        System.out.println("Closing Spring Application Context...");
        System.out.println("======================================================================");
        context.close();
    }
}
