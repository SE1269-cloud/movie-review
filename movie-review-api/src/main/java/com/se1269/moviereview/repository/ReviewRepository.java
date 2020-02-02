package com.se1269.moviereview.repository;

import com.se1269.moviereview.model.Movie;
import com.se1269.moviereview.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
}