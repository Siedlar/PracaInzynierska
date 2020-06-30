package pl.siedlarski.restfulworkout.dao;

import org.springframework.data.repository.CrudRepository;
import pl.siedlarski.restfulworkout.entity.Plan;


public interface PlanRepository extends CrudRepository<Plan, Integer> {
}
