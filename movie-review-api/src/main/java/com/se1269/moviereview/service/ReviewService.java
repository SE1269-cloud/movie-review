package com.se1269.moviereview.service;

import com.se1269.moviereview.repository.MovieRepository;
import com.se1269.moviereview.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;
}
