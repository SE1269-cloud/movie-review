package com.se1269.moviereview.service;

import com.se1269.moviereview.model.Movie;
import com.se1269.moviereview.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;

    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    public Optional<Movie> findById(int id){
        return movieRepository.findById(id);
    }

    public Movie insert(Movie movie){
        return movieRepository.save(movie);
    }

    public void deleteById(int id){
        movieRepository.deleteById(id);
    }

    public Movie update(Movie movie){
        Movie found = movieRepository.findById(movie.getId()).get();
        if(found != null){
            found.setCategories(movie.getCategories());
            found.setStartDate(movie.getStartDate());
            found.setImage(movie.getImage());
            found.setTitle(movie.getTitle());
            found.setDescription(movie.getDescription());
            found.setActors(movie.getActors());
            found.setDirectors(movie.getDirectors());
            return movieRepository.save(found);
        }
        return null;

    }

    public Page<Movie> getPaginationList(String keyword, int page, int itemsPerPage){
        Page<Movie> page1 = movieRepository.findAllByTitleContaining(keyword, PageRequest.of(page - 1, itemsPerPage));
        return page1;
    }
}
