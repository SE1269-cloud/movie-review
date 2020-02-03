package com.se1269.moviereview.repository;

import com.se1269.moviereview.model.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
    Page<Movie> findAllByTitleContaining(String title, Pageable pageable);

}
