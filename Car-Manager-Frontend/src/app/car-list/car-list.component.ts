import { CarService } from './../car.service';
import { Car } from './../car';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  keyword: string;
  cars: Car[];
  constructor(private carService: CarService,private router:Router) { }

  ngOnInit(): void {
    this.getCars();
    console.log(this.cars);
  }
  private getCars(){
    this.carService.getCarsList().subscribe(data =>{
      this.cars=data;
    })
  }
  updateCar(id: number)
  {
    this.router.navigate(['update-car',id]);
  }
  deleteCar(id: number)
  {
    this.carService.deleteCar(id).subscribe(data => {
      console.log(data);
      this.getCars();
    });
  }
  carDetails(id: number)
  {
    this.router.navigate(['car-details',id]);
  }
  searchCar()
  {
    this.router.navigate(['search-car/search',this.keyword]);
  }
  filterCar()
  {
    this.router.navigate(['filter-car/filter',this.keyword])
  }
}
