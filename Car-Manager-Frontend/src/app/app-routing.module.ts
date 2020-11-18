import { FilterCarComponent } from './filter-car/filter-car.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CarListComponent } from './car-list/car-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'cars', component : CarListComponent},
  {path:'create-car', component: CreateCarComponent},
  {path:'',redirectTo:'cars',pathMatch:'full'},
  {path:'update-car/:id', component: UpdateCarComponent},
  {path:'car-details/:id',component: CarDetailsComponent},
  {path:'search-car/search/:keyword',component:SearchCarComponent},
  {path:'filter-car/filter/:keyword',component:FilterCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
