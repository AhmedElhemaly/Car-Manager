import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from './../car.service';
import { Car } from './../car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
})
export class SearchCarComponent implements OnInit {
  keyword: string;
  cars: Car[];
  constructor(private carService: CarService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.keyword = this.route.snapshot.params['keyword'];
    this.getResults();
  }
  getResults()
  {
    this.carService.getCarByKeyword(this.keyword).subscribe(data =>{
      this.cars=data;
    })
  }

}
