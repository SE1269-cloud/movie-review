package com.se1269.moviereview.api;

import com.se1269.moviereview.model.Movie;
import com.se1269.moviereview.repository.MovieRepository;
import com.se1269.moviereview.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    MovieService movieService;

    @GetMapping
    public List<Movie> getAllMovies(){
        return movieService.findAll();
    }

    @PostMapping
    public Movie insertMovie(Movie movie){
        return null;
    }

    @DeleteMapping
    public Movie deleteMovie(int id){
        return null;
    }

    @PutMapping
    public Movie updateMovie(Movie movie){
        return null;
    }

    @GetMapping("/search/{searchString}")
    public List<Movie> searchMovie(@PathVariable String searchString){
        return null;
    }

    @GetMapping("/{id}")
    public Movie getMovieDetailById(@PathVariable int id){
        return null;
    }
}
