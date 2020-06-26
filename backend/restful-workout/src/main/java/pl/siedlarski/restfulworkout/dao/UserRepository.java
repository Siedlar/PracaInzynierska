package pl.siedlarski.restfulworkout.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.siedlarski.restfulworkout.entity.Users;
@Repository
public interface UserRepository extends CrudRepository<Users, Integer> {
Users findByLogin(String login);
}

