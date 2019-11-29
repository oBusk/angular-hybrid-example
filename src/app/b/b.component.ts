import { Component } from '@angular/core';

@Component({
  selector: 'app-b',
  template: `
    <h2>This is B! (Angular)</h2>
    <ul>
      <li><a uiSref="a-state" uiSrefActive="active">A</a></li>
      <li><a uiSref="b-state" uiSrefActive="active">B</a></li>
    </ul>
  `,
  styles: []
})
export class BComponent { }
