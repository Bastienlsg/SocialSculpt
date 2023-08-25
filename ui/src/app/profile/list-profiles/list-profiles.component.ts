import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../Profile';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html'
})
export class ListProfilesComponent implements OnInit {
  profiles?: Profile[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<Profile[]>("http://127.0.0.1:8080/profiles").subscribe(result => {
      this.profiles = result;
    });
  }
}
