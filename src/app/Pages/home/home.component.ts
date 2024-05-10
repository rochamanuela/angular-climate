import { ClimateService } from '../../Services/climate-service.service';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms"
import { CommonModule } from '@angular/common';
import { ClimateInterface } from '../../Interfaces/climate-interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  cityName = "";
  climate: ClimateInterface = {} as ClimateInterface;

  _fb = inject(FormBuilder);
  _climateService = inject(ClimateService);

  onSubmit() {
    console.log(this.cityName);
    if (this.cityName != "") {
      this._climateService.getWeatherByCity(this.cityName || "campinas")
        .subscribe((res: any) => {
          this.climate = {
            lon: res.coord.lon,
            lat: res.coord.lat,
            description: res.weather[0].description,
            temp: res.main.temp,
            temp_min: res.main.temp_min,
            temp_max: res.main.temp_max,
            humidity: res.main.humidity,
            name: res.name,
            feels_like: res.main.feels_like
          };
          console.log(this.climate);
        }
        );
    } else {
      this.climate = {
        lon: 0,
        lat: 0,
        name: 'Campinas',
        temp: 25,
        description: 'Ensolarado',
        temp_min: 20,
        temp_max: 30,
        feels_like: 26,
        humidity: 50
      };
    }
  }
}
