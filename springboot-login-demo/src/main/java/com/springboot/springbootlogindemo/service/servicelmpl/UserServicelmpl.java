package com.springboot.springbootlogindemo.service.servicelmpl;

import com.springboot.springbootlogindemo.domain.User;
import com.springboot.springbootlogindemo.repository.UserDao;
import com.springboot.springbootlogindemo.service.UserService;
import org.springframework.stereotype.Service;
import sun.dc.pr.PRError;

import javax.annotation.Resource;
@Service
public class UserServicelmpl implements UserService{
    @Resource
    private UserDao userDao;
    @Override
    public User loginService(String name, String password) {
        User user = userDao.findByNameAndPassword(name,password);
        if (user!=null){
            user.setPassword("");
        }
        return user;
    }

    @Override
    public User registerService(User user) {
        if (userDao.findByName(user.getName())!=null){
            return null;
        }else {
            User newUser=userDao.save(user);
            if (newUser!=null){
                newUser.setPassword("");
            }
            return newUser;
        }
    }
}
