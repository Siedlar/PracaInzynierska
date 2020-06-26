package pl.siedlarski.restfulworkout.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.siedlarski.restfulworkout.entity.Wymiary;

@Repository
public interface WymiaryRepository extends CrudRepository<Wymiary,Integer> {
}
