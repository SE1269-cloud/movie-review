package com.se1269.moviereview.api;

import com.se1269.moviereview.model.Movie;
import com.se1269.moviereview.model.Review;
import com.se1269.moviereview.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    @GetMapping
    public List<Review> getByMovieId(@RequestParam int movieId){
        return null;
    }

    @PostMapping
    public Review insertReview(){
        return null;
    }
}
