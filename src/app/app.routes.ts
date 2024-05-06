import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ResultComponent } from './Pages/result/result.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "result",
    component: ResultComponent
  }
];
