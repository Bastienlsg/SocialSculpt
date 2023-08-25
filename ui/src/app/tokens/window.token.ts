import { InjectionToken } from '@angular/core';
import { Window } from '../models';

declare var window: Window;

export const WINDOW = new InjectionToken<Window>(
  'Browser Window object with additional environment properties', {
    factory: () => <Window> window,
  },
);
