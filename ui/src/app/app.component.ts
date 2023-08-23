import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Profile } from './Profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialSculpt';
  profiles!: Profile[]

  constructor(private httpClient: HttpClient) {
    httpClient.get<Profile[]>("http://127.0.0.1:8080/profiles").subscribe(result=>{
      this.profiles = result;
      console.log(this.profiles);
    })
  }
}
