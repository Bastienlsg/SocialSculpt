import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Profile } from '../../models';

@Component({
  selector: 'app-profiles-single',
  templateUrl: './profiles-single.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilesSingleComponent {
  readonly profile$: Observable<Profile> = this.activatedRoute.data.pipe(
    map(data => <{ profile: Profile }> data),
    map(data => data.profile),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}
}
