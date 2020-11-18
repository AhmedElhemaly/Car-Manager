import { Car } from './car';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseURL = "http://localhost:8090/api/v1/cars";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  getCarsList() : Observable<Car[]>{
      return this.httpClient.get<Car[]>(`${this.baseURL}`);
  }
  createCar(car: Car) : Observable<any>{
    return this.httpClient.post(`${this.baseURL}`,car);
  }
  getCarById(id: number) : Observable<Car>{
    return this.httpClient.get<Car>(`${this.baseURL}/${id}`);
  }
  updateCar(id: number, car:Car) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,car);
  }
  deleteCar(id: number) : Observable<Object>{
    return this.httpClient.delete((`${this.baseURL}/${id}`));
  }
  getCarByKeyword(keyword:string): Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${this.baseURL}/search/${keyword}`);
  }
  filterCarByKeyword(keyword:string): Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${this.baseURL}/filter/${keyword}`);
  }
}
