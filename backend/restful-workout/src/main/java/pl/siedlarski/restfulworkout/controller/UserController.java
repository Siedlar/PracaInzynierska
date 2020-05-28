package pl.siedlarski.restfulworkout.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;
import pl.siedlarski.restfulworkout.dao.UserRepository;
import pl.siedlarski.restfulworkout.entity.Users;

import java.sql.SQLIntegrityConstraintViolationException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @PostMapping("/register")
    public String essa(@RequestBody Users user){

        Users x=user;
        try{
        System.out.println(x.toString());
        userRepository.save(x);
            return "udało sie pomyslnie zarejestrowac w serwisie!!!";
        }catch (DataIntegrityViolationException e){
            System.out.println("Uzytkownik istnieje w bazie");
            return  ("Uzytkownik istnieje w bazie");
        }

    }
}
