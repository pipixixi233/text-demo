package com.springboot.springbootlogindemo.service;

import com.springboot.springbootlogindemo.domain.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    User loginService(String name,String password);
    User registerService(User user);
}
