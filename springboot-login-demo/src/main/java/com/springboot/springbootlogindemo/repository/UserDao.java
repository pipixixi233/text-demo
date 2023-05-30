package com.springboot.springbootlogindemo.repository;

import javax.annotation.Resource;
import com.springboot.springbootlogindemo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Long> {
    User findByName(String name);
    User findByNameAndPassword(String name,String password);

}
