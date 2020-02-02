package com.se1269.moviereview.repository;

import com.se1269.moviereview.model.Movie;
import com.se1269.moviereview.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
