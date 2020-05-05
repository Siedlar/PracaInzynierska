package pl.siedlarski.restfulworkout.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.siedlarski.restfulworkout.dao.UserRepository;
import pl.siedlarski.restfulworkout.entity.User;

import java.util.List;
import java.util.Optional;

@Service("userService")
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public void dodaj(User user){
        userRepository.save(user);
    }
    public User pobierzUser(Integer liczba){
        Optional<User> optional=userRepository.findById(liczba);
        User user= optional.get();
        return user;
    }
    public List<User> listaUser(){
        List <User> lista= (List<User>) userRepository.findAll();
        return lista;
    }
}
