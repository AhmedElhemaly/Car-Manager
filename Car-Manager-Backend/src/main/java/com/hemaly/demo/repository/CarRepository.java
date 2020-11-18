package com.hemaly.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hemaly.demo.model.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
	@Query(value = "select c from Car c where c.name LIKE '%' || :keyword || '%'"
			+" OR c.owner LIKE '%' || :keyword || '%'"
			+" OR c.color LIKE '%' || :keyword || '%'"
			+" OR c.model LIKE '%' || :keyword || '%'")
	public List<Car> search(@Param("keyword") String keyword);
	
//	@Query(value = "from Car order by ?1")
//	public List<Car> filter(@Param("keyword") String keyword);

}
