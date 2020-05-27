package pl.siedlarski.restfulworkout;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.siedlarski.restfulworkout.dao.UserRepository;
import pl.siedlarski.restfulworkout.entity.Users;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class WelcomePageController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public List<Users> getUsers() {
        return (List<Users>) userRepository.findAll();
    }

    @GetMapping("/dane")
    public Users getUser(){
        return   userRepository.findById(1).get();
    }
}
