'use strict';

import { $ } from './utils/dom.js';
import Counter from './modules/Counter.js';

class App {
  constructor() {
    const localNums = JSON.parse(localStorage.getItem('nums'));
    this.nums = localNums ? localNums : [];
    this.render();
    this.initEventListeners();
  }

  // 상태에 변화가 있을 때 호출하는 함수
  update() {
    localStorage.setItem('nums', JSON.stringify(this.nums));
    this.render();
  }

  increase = (id) => {
    this.nums[id] += 1;
    this.update();
  };

  decrease = (id) => {
    this.nums[id] -= 1;
    this.update();
  };

  reset = (id) => {
    this.nums[id] = 0;
    this.update();
  };

  deleteCounter = (id) => {
    this.nums.splice(id, 1);
    this.update();
  };

  makeNewCounter = () => {
    this.nums.push(0);
    this.update();
  };

  initEventListeners() {
    $('#btn-new-counter').addEventListener('click', this.makeNewCounter);
  }

  render() {
    const counters = this.nums.map((num, id) => new Counter(num, id));
    const countersTemplate = counters
      .map((counter) => counter.render())
      .join('');
    $('#counter-list').innerHTML = countersTemplate;
    counters.map((counter) => {
      counter.initEventListeners(
        this.increase,
        this.decrease,
        this.reset,
        this.deleteCounter
      );
    });
  }
}

window.onload = () => {
  new App();
};
