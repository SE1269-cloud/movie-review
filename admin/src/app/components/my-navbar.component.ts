import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-navbar',
  template: `
    <mdb-navbar SideClass="navbar navbar-expand-lg navbar-dark bg-primary" [containerInside]="false">
        <mdb-navbar-brand><a class="navbar-brand" href="/">MovieReview</a></mdb-navbar-brand>
        <links>
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a [routerLink]="['/movies']" class="nav-link waves-light" mdbWavesEffect>Movies</a>
            </li>
            </ul>
        </links>
    </mdb-navbar>
  `,
})

export class MyNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }


}
