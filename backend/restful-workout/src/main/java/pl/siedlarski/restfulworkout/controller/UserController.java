package pl.siedlarski.restfulworkout.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;
import pl.siedlarski.restfulworkout.dao.PlanRepository;
import pl.siedlarski.restfulworkout.dao.UserRepository;
import pl.siedlarski.restfulworkout.dao.WymiaryRepository;
import pl.siedlarski.restfulworkout.entity.*;

import java.sql.SQLIntegrityConstraintViolationException;
import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    WymiaryRepository wymiaryRepository;
    @Autowired
    PlanRepository planRepository;
    @PostMapping("/register")
    public String essa(@RequestBody Users user){

        Users x=user;
        try{
        System.out.println(x.toString());
        userRepository.save(x);
            return "Udało sie pomyslnie zarejestrowac w serwisie,nastąpi przekierowanie do strony logowania!!!";
        }catch (DataIntegrityViolationException e){
            throw new DataIntegrityViolationException("Uzytkownik o podanym loginie istnieje w bazie,zmień go");
        }

    }
    @GetMapping("/dane/{username}")
    public Users getUser(@PathVariable String username){

        return   userRepository.findByLogin(username);
    }
    @PostMapping("/logowanie")
    public Users logowanie(@RequestBody Users user) throws Exception {
Users checkUser= userRepository.findByLogin(user.getLogin());
if(checkUser.getPassword().equals(user.getPassword())){
    return  checkUser;
}
     else {
         throw new Exception("Hasło jest zle");
}
    }
    @PostMapping("/zapisz")
    public String zapiszWymiar(@RequestBody Users user){
        System.out.println(user.toString());
        Wymiary wymiary=user.getListaWymiarow().get(0);
wymiary.setUser(  userRepository.findByLogin(user.getLogin()));
        wymiaryRepository.save(wymiary);
return "esssssaaaa";
    }
    @DeleteMapping("/usunWymiar/{id_wymiary}")
    public String usunWymiar(@PathVariable Integer id_wymiary){
      wymiaryRepository.deleteById(id_wymiary);
        return "usunieto z bazy";
    }
    @DeleteMapping("/usunPlan/{id_plan}")
    public String usunPlan(@PathVariable Integer id_plan){
        planRepository.deleteById(id_plan);
        return "usunieto z bazy";
    }
    @PostMapping("/dodajPlan")
    public String dodajPlan(@RequestBody Users user){
        System.out.println(user.toString());
       Plan plan= user.getListaPlanow().get(0);
       plan.setUser(  userRepository.findByLogin(user.getLogin()));
       for(Cwiczenia cwiczenia:plan.getListaCwiczen()){
           cwiczenia.setPlan(plan);
           for(Jedno_Cwiczenie jedno:cwiczenia.getListaCwiczen()){
               jedno.setCwiczenia(cwiczenia);
           }
       }
       planRepository.save(plan);
       return "essa";
    }
}
