import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Zone-less change detection with event coalescing
    provideZoneChangeDetection({ eventCoalescing: true }), 

    // Router configuration
    provideRouter(routes),
  
    // provide the HttpClient service(Replaces HttpClientModule)
    provideHttpClient(),  
  ],
};
