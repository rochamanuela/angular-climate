import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { ClimateServiceService } from './Services/climate-service.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(), ClimateServiceService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
