import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCarComponent } from './create-car/create-car.component'
import { FormsModule } from '@angular/forms';
import { UpdateCarComponent } from './update-car/update-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { FilterCarComponent } from './filter-car/filter-car.component';
@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CreateCarComponent,
    UpdateCarComponent,
    CarDetailsComponent,
    SearchCarComponent,
    FilterCarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
