/**
 * 接口模块
 */

import $ from 'jquery';

let url = {
  getOmit: '/get/omit',
  getOpenCode: '/get/opencode',
  getState: '/get/state'
};

class Interface {
  /**
   * 获取遗漏数据
   * @param issue {string} 当前期号
   * @return {Promise}
   */
  getOmit(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url.getOmit,
        data: {
          issue
        },
        dataType: 'json',
        success(res) {
          self.setOmit(res.data);
          resolve.call(self, res);
        },
        error(err) {
          reject.call(err);
        }
      });
    });
  }

  /**
   * 获取开奖号码
   * @param issue {string} 当前期号
   * @return {Promise}
   */
  getOpenCode(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url.getOpenCode,
        data: {
          issue
        },
        dateType: 'json',
        success(res) {
          self.setOpenCode(res.data);
          resolve.call(self, res);
        },
        error(err) {
          reject.call(err);
        }
      });
    });
  }

  /**
   * 获取开奖状态
   * @param issue {string} 当前期号
   * @return {Promise}
   */
  getState(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url.getState,
        data: {
          issue
        },
        dataType: 'json',
        success(res) {
          resolve.call(self, res);
        },
        error(err) {
          reject.call(err);
        }
      });
    });
  }
}

export default Interface;