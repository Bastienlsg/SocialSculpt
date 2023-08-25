import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../tokens';

export class RestApiService {
  protected httpClient = inject(HttpClient);
  protected environment = inject(ENVIRONMENT);

  constructor(
    protected endpoint: string,
  ) {}

  protected get<T>(...params: (string | number)[]): Observable<T> {
    return this.httpClient.get<T>(
      this.buildUrl(params),
    );
  }

  private buildUrl(params: (string | number)[]): string {
    return [this.environment.api.path, this.endpoint, ...params].join('/');
  }
}
