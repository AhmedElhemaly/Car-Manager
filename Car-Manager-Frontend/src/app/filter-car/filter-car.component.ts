import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from './../car';

@Component({
  selector: 'app-filter-car',
  templateUrl: './filter-car.component.html',
  styleUrls: ['./filter-car.component.css']
})
export class FilterCarComponent implements OnInit {

  keyword: string;
  cars: Car[];
  constructor(private carService: CarService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.keyword = this.route.snapshot.params['keyword'];
    this.getResults();
  }
  getResults()
  {
    this.carService.filterCarByKeyword(this.keyword).subscribe(data =>{
      this.cars=data;
    })
  }

}
