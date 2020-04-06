package com.se1269.moviereview.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class test {
    public static void main(String[] args) {
        BCryptPasswordEncoder pe = new BCryptPasswordEncoder();
        String result = pe.encode("password");
        System.out.println(result);
    }
}
