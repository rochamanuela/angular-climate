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
export class HomeComponent{
  cityName = "";
  cityData:any = {};

  _fb = inject(FormBuilder);
  _climateService = inject(ClimateService);

  //constructor(private climateService: ClimateServiceService) {} // Injetando o serviço de clima
  onSubmit() {
    console.log(this.cityName);
    if (this.cityName!="") {  
      this._climateService.getWeatherByCity(this.cityName || "campinas")
        .subscribe((res:any)=>{
            this.cityData = res;
            // Aqui você pode manipular os dados do clima retornados pela API
            console.log(res); 
          }
        );
    }
    // agora só falta retornar esses dados obtidos para o usuário e ajustar as estilizações
  }
}
