import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Environment, Window } from './app/models';

declare var window: Window;
const updateWindowEnvironment = (environment: Environment) => window.environment = environment;

fetch('assets/env.json')
  .then(response => response.json())
  .then(env => updateWindowEnvironment(env))
  .then(
    () => platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err)),
  );
