import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { appProviders } from './app/app.providers'

bootstrapApplication(AppComponent, {
  providers: [
    ...appProviders,
    provideHttpClient(withInterceptorsFromDi()),  
    provideRouter(routes)    
  ]
});