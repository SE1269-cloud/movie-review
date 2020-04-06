package com.se1269.moviereview.repository;

import com.se1269.moviereview.model.Movie;
import com.se1269.moviereview.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findFirstByUsername(String username);
}
