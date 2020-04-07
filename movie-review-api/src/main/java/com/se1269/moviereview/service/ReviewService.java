package com.se1269.moviereview.service;

import com.se1269.moviereview.model.Review;
import com.se1269.moviereview.repository.MovieRepository;
import com.se1269.moviereview.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    public List<Review> getReviewsByMovieId(int movieId) {
        return reviewRepository.findAllByMovieIdOrderByIdDesc(movieId);
    }

    public Review addReview(Review review) {
        review.setId(0);
        return reviewRepository.save(review);
    }
}
