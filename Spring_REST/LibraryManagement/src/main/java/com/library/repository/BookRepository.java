package com.library.repository;

import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class BookRepository {

    private final ConcurrentHashMap<Long, String> booksDatabase = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong(0);

    public BookRepository() {
        save("The Great Gatsby");
        save("To Kill a Mockingbird");
        save("1984");
    }

    public List<String> findAll() {
        try {
            Thread.sleep(50);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return new ArrayList<>(booksDatabase.values());
    }

    public Optional<String> findById(Long id) {
        return Optional.ofNullable(booksDatabase.get(id));
    }

    public String save(String bookTitle) {
        if (bookTitle == null || bookTitle.trim().isEmpty()) {
            throw new IllegalArgumentException("Book title cannot be empty");
        }
        
        if (booksDatabase.containsValue(bookTitle)) {
            return bookTitle;
        }

        Long id = idGenerator.incrementAndGet();
        booksDatabase.put(id, bookTitle);
        return bookTitle;
    }

    public boolean delete(String bookTitle) {
        return booksDatabase.entrySet().removeIf(entry -> entry.getValue().equalsIgnoreCase(bookTitle));
    }
}
