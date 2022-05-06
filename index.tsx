/*
 * @Author: zhangchenyang
 * @Date: 2022-05-06 14:39:54
 * @LastEditors: zhangchenyang
 * @LastEditTime: 2022-05-06 14:55:47
 */
import React from 'react';
import { observer } from 'mobx-react';
import { Modal, Button } from 'antd';
import DI from '../../../inversify.config';
// import {  } from '../../../constants/identifiers';
import DemoModalViewModel from './viewModel';
import style from './style.less';
import closeIcon from '../../../assets/images/close_icon_normal.svg';

@observer
export default class DemoModal extends React.Component {
  private DemoModalViewModel = DI.DIContainer.get<DemoModalViewModel>();

  public render(): JSX.Element {
    const { isVisible, setVisible } = this.DemoModalViewModel;
    return (
      <Modal
        visible={isVisible}
        width={750}
        closable={false}
        footer={null}
        wrapClassName={style.modalContainer}
        destroyOnClose
        onCancel={(): void => setVisible(false)}
      >
        <div className={style.modalContent}>
          <div className={style.modalHeader}>
            弹窗标题
            <Button type="text" onClick={(): void => setVisible(false)}>
              <img src={closeIcon} alt="" />
            </Button>
          </div>
          <div className={style.bottomButton}>
            <Button type="primary" onClick={(): void => setVisible(false)}>
              关闭
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}
