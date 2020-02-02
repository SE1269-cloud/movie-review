package com.se1269.moviereview.repository;

import com.se1269.moviereview.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
}
