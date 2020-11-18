package com.hemaly.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Car {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private long id;
	private String name;
	private String color;
	private String model;
	private String owner;
	private String hideMe;
	public Car()
	{
		
	}
	public Car(long id, String name, String color, String model, String owner) {
		super();
		this.id = id;
		this.name = name;
		this.color = color;
		this.model = model;
		this.owner = owner;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	@Override
	public String toString() {
		return "Car [id=" + id + ", name=" + name + ", color=" + color + ", model=" + model + ", owner=" + owner + "]";
	}	
}
