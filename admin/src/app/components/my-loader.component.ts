import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-loader',
  template: `
    <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
    </div>
  `,
})

export class MyLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }


}
