import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ServerComponent } from './app/server/server.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
