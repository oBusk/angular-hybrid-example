import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  template: `
    <h2>This is B! (Angular)</h2>
  `,
  styles: []
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
