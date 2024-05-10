import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { ClimateService } from './Services/climate-service.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(), ClimateService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
