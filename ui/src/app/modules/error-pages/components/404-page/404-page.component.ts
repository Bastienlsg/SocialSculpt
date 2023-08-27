import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-404-page',
  templateUrl: './404-page.component.html'
})
export class Page404ErrorComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}
}
