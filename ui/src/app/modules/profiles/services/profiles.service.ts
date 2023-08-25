import { Injectable } from '@angular/core';
import { RestApiService } from '../../../services';
import { Observable } from 'rxjs';
import { Profile } from '../models';

@Injectable()
export class ProfilesService extends RestApiService {
  constructor() {
    super('profiles');
  }

  loadAll(): Observable<Profile[]> {
    return this.get<Profile[]>();
  }

  loadSingle(id: string): Observable<Profile> {
    return this.get<Profile>(id);
  }
}
