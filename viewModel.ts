/*
 * @Author: zhangchenyang
 * @Date: 2022-05-06 14:40:23
 * @LastEditors: zhangchenyang
 * @LastEditTime: 2022-05-06 14:51:47
 */

import { injectable } from 'inversify';
import { makeObservable, observable, action } from 'mobx';

@injectable()
export default class DemoModalViewModal {
  @observable
  public isVisible: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  public setVisible = (val: boolean): void => {
    this.isVisible = val;
  };
}
