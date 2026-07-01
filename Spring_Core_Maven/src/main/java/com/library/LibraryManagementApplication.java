package com.library;

import com.library.service.BookService;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import java.util.List;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        System.out.println("--- Initializing Spring Application Context ---");
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        System.out.println("--- Spring Context Loaded Successfully ---");

        // Retrieve the BookService bean
        BookService bookService = context.getBean("bookService", BookService.class);

        System.out.println("\n--- Testing Dependency Injection and AOP Logging ---");
        
        // Add some books
        bookService.addBook("The Great Gatsby");
        bookService.addBook("To Kill a Mockingbird");
        bookService.addBook("1984");

        // Retrieve and list all books
        List<String> books = bookService.getAllBooks();
        System.out.println("\nAll Books in Library:");
        for (String book : books) {
            System.out.println("- " + book);
        }

        // Close context
        context.close();
        System.out.println("\n--- Application Context Closed ---");
    }
}
