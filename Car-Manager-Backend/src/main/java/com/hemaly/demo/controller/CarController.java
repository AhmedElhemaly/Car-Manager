package com.hemaly.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hemaly.demo.exception.ResourceNotFoundException;
import com.hemaly.demo.model.Car;
import com.hemaly.demo.repository.CarRepository;

@RestController
@RequestMapping(path="/api/v1",produces = {"application/json"})
@CrossOrigin(origins = "http://localhost:4200") 
public class CarController {
	@Autowired
	private CarRepository repo;
	
	@GetMapping(path="/cars",produces = {"application/json"})
	public List<Car> getAllCars()
	{
		return repo.findAll();
	}
	@PostMapping("/cars")
	public Car createCar(@RequestBody Car car)
	{
		return repo.save(car);
	}
	@GetMapping("/cars/search/{keyword}")
	public List<Car> searchForCar(@PathVariable String keyword)
	{
		return repo.search(keyword);
	}
	@GetMapping("/cars/{id}")
	public Car getCar(@PathVariable Long id)
	{
		return repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Car with id : "+id+" Not Exsist"));
	}
	@PutMapping("/cars/{id}")
	public ResponseEntity<Car> updateCar(@PathVariable Long id,@RequestBody Car carDetails)
	{
		Car car = repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Car with id : "+id+" Not Exsist"));
		car.setName(carDetails.getName());
		car.setModel(carDetails.getModel());
		car.setColor(carDetails.getColor());
		car.setOwner(carDetails.getOwner());
		
		Car updatedCar = repo.save(car);
		return ResponseEntity.ok(updatedCar);
	}
	@DeleteMapping("/cars/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCar(@PathVariable long id)
	{
		Car car = repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Car with id : "+id+" Not Exsist"));
		repo.delete(car);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
	@GetMapping("/cars/filter/{keyword}")
	public List<Car> filterCars(@PathVariable String keyword)
	{
		return repo.findAll(Sort.by(Sort.Direction.ASC,keyword));
	}
}
