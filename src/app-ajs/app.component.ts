import { IComponentOptions } from 'angular';

export const appComponent: IComponentOptions = {
  template:
    `
    <h1>This is AngularJS!</h1>
    <ul>
      <li><a ui-sref="a-state">A</a></li>
      <li><a ui-sref="b-state">B</a></li>
    </ul>
    <ui-view></ui-view>
    `,
}
