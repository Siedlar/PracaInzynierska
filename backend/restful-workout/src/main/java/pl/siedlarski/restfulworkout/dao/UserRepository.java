package pl.siedlarski.restfulworkout.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.siedlarski.restfulworkout.entity.User;

@Repository("userRepo")
public interface UserRepository extends CrudRepository<User, Integer> {}