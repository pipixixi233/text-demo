package com.springboot.springbootlogindemo.controller;

import com.springboot.springbootlogindemo.domain.User;
import com.springboot.springbootlogindemo.service.UserService;
import com.springboot.springbootlogindemo.utils.Result;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userService;
    @PostMapping("/login")
    public Result<User> loginController(@RequestParam String name,@RequestParam String password){
        User user=userService.loginService(name,password);
        if (user!=null){
            return Result.success(user,"登录成功");
        }else{
            return Result.success(user,"账号或密码错误");
        }
    }
    @PostMapping("/register")
    public Result<User> registerController(@RequestBody User user){
        User users=userService.registerService(user);
        if (users!=null){
            return Result.success(users,"注册成功！");
        }else {
            return Result.success(users,"用户名已存在");
        }
    }
    @RequestMapping("/News")
    public String News(){
        return "News";
    }
}
