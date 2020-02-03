package com.se1269.moviereview.api;

import com.se1269.moviereview.model.Movie;
import com.se1269.moviereview.service.MovieService;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
class CategoryResponse {
    private int id;
    private String name;
}

@Getter
@Setter
@NoArgsConstructor
class CategoriesListResponse {
    private List<CategoryResponse> genres;
}

@Getter
@Setter
@NoArgsConstructor
class MovieResponse{
    private String title;
    private String overview;
    private String release_date;
    private String poster_path;
    private List<Integer> genre_ids;
}

@Getter
@Setter
@NoArgsConstructor
class MoviesListResponse{
    private List<MovieResponse> results;
}

@RestController
@RequestMapping("api/movies")
public class MovieController {

    @Autowired
    MovieService movieService;

    private final String prefix_api_url = "https://api.themoviedb.org/3";
    private final String prefix_image_url = "https://image.tmdb.org/t/p/w500";
    private final String api_key = "94212f0e92717193c4fba6771b315e54";

    public Timestamp convertStringToSQLTimestamp(String str){
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Date parsedDate = dateFormat.parse(str);
            Timestamp timestamp = new Timestamp(parsedDate.getTime());
            return timestamp;
        } catch(Exception e) { //this generic but you can control another types of exception
            // look the origin of excption
            return null;
        }
    }

    public List<Movie> getDataFromMovieDBAPI(){
        RestTemplate restTemplate = new RestTemplate();
        String categoriesUrl = prefix_api_url + "/genre/movie/list?api_key=" + api_key;
        CategoriesListResponse categoriesResponse = restTemplate.getForObject(categoriesUrl, CategoriesListResponse.class);
        List<Movie> moviesList = new ArrayList<>();

        for(int i = 1; i <= 5; i++){
            String moviesUrl = prefix_api_url + "/discover/movie?sort_by=popularity.desc&page="+ i +"&api_key=" + api_key;
            MoviesListResponse moviesListResponse = restTemplate.getForObject(moviesUrl, MoviesListResponse.class);

            moviesListResponse.getResults().stream().forEach(m -> {
                Movie movie = new Movie();
                movie.setTitle(m.getTitle());
                movie.setImage(prefix_image_url + m.getPoster_path());
                movie.setDescription(m.getOverview());

                final String[] categoriesTitles = {""};
                categoriesResponse.getGenres().stream().forEach(cate -> {
                    if(m.getGenre_ids().contains(cate.getId())) categoriesTitles[0] = categoriesTitles[0] + cate.getName() + ", ";
                });
                if(categoriesTitles[0].length() > 0) categoriesTitles[0] = categoriesTitles[0].substring(0, categoriesTitles[0].length() - 2);

                movie.setCategories(categoriesTitles[0]);

                movie.setStartDate(convertStringToSQLTimestamp(m.getRelease_date()));

                moviesList.add(movie);
            });
        }
        return  moviesList;
    }

    @GetMapping("/insert-movies")
    public ResponseEntity insertMovies(){
        List<Movie> moviesList = getDataFromMovieDBAPI();
        return new ResponseEntity(moviesList, HttpStatus.OK);
    }

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
