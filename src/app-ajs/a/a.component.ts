import { IComponentOptions } from 'angular';

export const aComponent: IComponentOptions = {
  template: `
    <h2>This is A (AngularJS)</h2>
    <ul>
      <li><a ui-sref="a-state" ui-sref-active="active">A</a></li>
      <li><a ui-sref="b-state" ui-sref-active="active">B</a></li>
    </ul>
  `,
  controller: class AComponent { },
}
