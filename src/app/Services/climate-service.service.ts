import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimateServiceService {
  constructor(private http: HttpClient) {}

  // URL base da API do OpenWeatherMap
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  // Chave da API do OpenWeatherMap
  apiKey = 'cbcaa10d6529865c77e235f140d94678';

  // Método para obter o clima por cidade
  getWeatherByCity(city: string) {
    // URL completa com a cidade e a chave da API
    const url = `${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`;
    // Fazendo a requisição HTTP GET para a API
    return this.http.get(url);
  }
}
