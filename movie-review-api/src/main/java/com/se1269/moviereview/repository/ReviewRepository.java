package com.se1269.moviereview.repository;

import com.se1269.moviereview.model.Movie;
import com.se1269.moviereview.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    List<Review> findAllByMovieIdOrderByIdDesc(int movieId);
}
