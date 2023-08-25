import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Profile } from '../../models';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilesListComponent {
  readonly profiles$: Observable<Profile[]> = this.activatedRoute.data.pipe(
    map((data) => <{ profiles: Profile[] }> data),
    map(data => data.profiles),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  buildProfileLink(id: number): (string | number)[] {
    return ['/', 'profiles', id];
  }
}
