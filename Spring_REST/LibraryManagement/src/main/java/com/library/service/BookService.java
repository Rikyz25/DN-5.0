package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookService {

    private BookRepository bookRepository;

    public BookService() {
        System.out.println("[BookService] Default constructor called (Ready for Setter Injection)");
    }

    @Autowired
    public BookService(BookRepository bookRepository) {
        System.out.println("[BookService] Constructor injection called with BookRepository");
        this.bookRepository = bookRepository;
    }

    @Autowired
    public void setBookRepository(BookRepository bookRepository) {
        System.out.println("[BookService] Setter injection method setBookRepository() called");
        this.bookRepository = bookRepository;
    }

    public List<String> getAllBooks() {
        if (bookRepository == null) {
            throw new IllegalStateException("BookRepository dependency has not been injected!");
        }
        System.out.println("[BookService] Fetching all books from the repository...");
        return bookRepository.findAll();
    }

    public void addBook(String title) {
        if (bookRepository == null) {
            throw new IllegalStateException("BookRepository dependency has not been injected!");
        }
        System.out.println("[BookService] Adding a new book: " + title);
        bookRepository.save(title);
    }

    public boolean removeBook(String title) {
        if (bookRepository == null) {
            throw new IllegalStateException("BookRepository dependency has not been injected!");
        }
        System.out.println("[BookService] Attempting to remove book: " + title);
        return bookRepository.delete(title);
    }
}
