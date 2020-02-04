import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-footer',
  template: `
    <footer class="bg-primary py-3 text-white">
        <p class="text-center">MovieReview Admin Dashboard</p>
    </footer>
  `,
})

export class MyFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }


}
