import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-notfound',
  template: `
    <h3 class="text-center">
        {{ message }}
    </h3>
  `,
})

export class NotfoundComponent implements OnInit {
    @Input('message') message: string;
    constructor() { }

    ngOnInit() {
    
    }


}
