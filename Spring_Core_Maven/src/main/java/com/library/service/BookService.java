package com.library.service;

import com.library.repository.BookRepository;
import java.util.List;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("Service: Adding book: " + title);
        bookRepository.save(title);
    }

    public List<String> getAllBooks() {
        System.out.println("Service: Fetching list of all books");
        return bookRepository.findAll();
    }
}
