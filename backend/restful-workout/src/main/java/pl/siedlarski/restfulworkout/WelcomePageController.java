package pl.siedlarski.restfulworkout;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.siedlarski.restfulworkout.entity.User;
import pl.siedlarski.restfulworkout.service.UserService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class WelcomePageController {
    @Autowired
    private ApplicationContext context;
    @RequestMapping(path="/essa")
    public List<User> essa(){
        UserService userService=(UserService) context.getBean("userService");
      List<User> listaUser=userService.listaUser();
        return listaUser;
    }
}
