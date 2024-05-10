import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ClimateService } from './Services/climate-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-climate';
  weatherData: any;

  constructor(private climateService: ClimateService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    const city = 'Campinas';
    this.climateService.getWeatherByCity(city)
      .subscribe((data: any) => {
        this.weatherData = data;
        console.log(this.weatherData);
      });
  }
}
