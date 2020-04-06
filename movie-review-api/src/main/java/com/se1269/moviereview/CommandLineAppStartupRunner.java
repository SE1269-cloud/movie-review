package com.se1269.moviereview;

import com.se1269.moviereview.model.User;
import com.se1269.moviereview.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CommandLineAppStartupRunner implements CommandLineRunner {
    private static final Logger LOG =
            LoggerFactory.getLogger(CommandLineAppStartupRunner.class);

    @Autowired
    UserService userService;

    @Override
    public void run(String...args) throws Exception {
        userService.save(new User("admin", "admin"));
    }
}
