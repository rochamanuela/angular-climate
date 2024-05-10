import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {
  constructor(private http: HttpClient) { }

  // URL base da API do OpenWeatherMap
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  // Chave da API do OpenWeatherMap
  apiKey = 'cbcaa10d6529865c77e235f140d94678';

  // Método para obter o clima por cidade
  getWeatherByCity(city: string) {
    const url = `${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`;
    return this.http.get(url);
    // .pipe(
    //   map((val: any) => {
    //     return {
    //       "lon": val.coord.lon,
    //       "lat": val.coord.lat,
    //       "description": val.weather[0].description,
    //       "temp": val.main.temp,
    //       "temp_min": val.main.temp_min,
    //       "temp_max": val.main.temp_max,
    //       "humidity": val.main.humidity,
    //       "name": val.name,
    //       "feels_like": val.main.feels_like
    //     }
    //   })
    // );
  }
}
