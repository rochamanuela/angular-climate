import { ClimateServiceService } from '../../Services/climate-service.service';
import { Component, inject } from '@angular/core';
import { 
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  cityName = "";

  _fb = inject(FormBuilder);

  constructor(private climateService: ClimateServiceService) {} // Injetando o serviço de clima

  dataCity = this._fb.group({ cityName: ["", Validators.required] });

  submit() {
    if (this.dataCity.valid) {
      const city = this.dataCity.value.cityName; // Obtendo o nome da cidade do formulário
      this.climateService.getWeatherByCity(city || "campinas")
        .subscribe((data: any) => {
          // Aqui você pode manipular os dados do clima retornados pela API
          console.log(data);
        });
    }
  }
}
