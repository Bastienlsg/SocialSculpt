import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../models';
import { ProfilesFacade } from '../../+state';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilesListComponent {
  readonly profiles$: Observable<Profile[]> = this.profilesFacade.profiles$;
  readonly columns = ['id', 'name', 'link'];

  constructor(
    private profilesFacade: ProfilesFacade,
  ) {
  }

  buildProfileLink(id: number): (string | number)[] {
    return ['/', 'profiles', id];
  }
}
