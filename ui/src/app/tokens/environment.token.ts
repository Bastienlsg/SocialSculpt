import { InjectionToken } from '@angular/core';
import { Environment, Window } from '../models';

declare var window: Window;

export const ENVIRONMENT = new InjectionToken<Environment>(
  'An environment token', {
    factory: () => window.environment,
  },
);
