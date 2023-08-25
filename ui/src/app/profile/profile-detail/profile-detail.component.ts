import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../Profile';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
})
export class ProfileDetailComponent implements OnInit {
  profile?: Profile;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    const profileId = this.route.snapshot.paramMap.get('id');
    if (profileId) {
      this.httpClient.get<Profile>(`http://127.0.0.1:8080/profiles/${profileId}`).subscribe(result => {
        this.profile = result;
      });
    }
  }
}