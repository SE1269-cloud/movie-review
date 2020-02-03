package com.se1269.moviereview.api;

import com.se1269.moviereview.common.utils.MovieAPIUtils;
import com.se1269.moviereview.model.Movie;
import com.se1269.moviereview.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/movies")
public class MovieController {

    @Autowired
    MovieService movieService;

    @GetMapping("/insert-movies")
    public ResponseEntity insertMovies(){
        List<Movie> moviesList = MovieAPIUtils.getDataFromMovieDBAPI();
        List<Movie> insertedMoviesList = new ArrayList<>();
        moviesList.stream().forEach(movie -> {
            insertedMoviesList.add(movieService.insert(movie));
        });
        return new ResponseEntity(insertedMoviesList, HttpStatus.OK);
    }

    @GetMapping
    public List<Movie> getAllMovies(){
        return movieService.findAll();
    }

    @PostMapping
    public ResponseEntity insertMovie(Movie movie){
        Movie movie1 = movieService.insert(movie);
        return new ResponseEntity<Movie>(movie1, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteMovie(@PathVariable int id){
        movieService.deleteById(id);
        return new ResponseEntity("success", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity updateMovie(Movie movie){
        Movie movie1 = movieService.update(movie);
        return new ResponseEntity<Movie>(movie1, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity searchMovie(@RequestParam String keyword, @RequestParam int page, @RequestParam int itemsPerPage){
        if(StringUtils.isEmpty(keyword)) keyword = "";
        Page<Movie> movies = movieService.getPaginationList(keyword, page, itemsPerPage);
        return  new ResponseEntity(movies, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity getMovieDetailById(@PathVariable int id){
        Optional<Movie> movie = movieService.findById(id);
        return new ResponseEntity<>(movie, HttpStatus.OK);
    }
}
