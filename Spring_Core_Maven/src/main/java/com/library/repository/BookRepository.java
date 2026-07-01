package com.library.repository;

import java.util.ArrayList;
import java.util.List;

public class BookRepository {
    private final List<String> books = new ArrayList<>();

    public void save(String bookTitle) {
        try {
            Thread.sleep(50);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        books.add(bookTitle);
        System.out.println("Repository: Saved book \"" + bookTitle + "\"");
    }

    public List<String> findAll() {
        try {
            Thread.sleep(30);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.println("Repository: Retrieving all books");
        return new ArrayList<>(books);
    }
}
