'use strict';

import { $ } from './utils/dom.js';
import Counter from './modules/Counter.js';

class App {
  constructor() {
    const counters = JSON.parse(localStorage.getItem('counters'));
    const currentId = Number(localStorage.getItem('id'));
    this._counters = counters ? counters : [];
    this._currentId = currentId ? currentId : 0;
    this._counterInstances = this._counters.map(
      (counter) => new Counter(counter.num, counter.id)
    );
    this.render();
    this.initEventListeners();
  }

  update() {
    localStorage.setItem('counters', JSON.stringify(this._counters));
    localStorage.setItem('id', JSON.stringify(this._currentId));
    this._counterInstances = this._counters.map(
      (counter) => new Counter(counter.num, counter.id)
    );
    this.render();
  }

  getUpdatedCounters(counterInstance) {
    const index = this._counters.findIndex(
      (counter) => counter.id === counterInstance.id
    );
    const newCounters = [...this._counters];
    newCounters.splice(index, 1, {
      id: counterInstance.id,
      num: counterInstance.num,
    });
    return newCounters;
  }

  getFilteredCounters(id) {
    return this._counters.filter((counter) => counter.id !== id);
  }

  makeCounterTemplate(id, num) {
    return `<article data-counter-id=${id} class="counter-box">
    <div class="num-box">
      <span class="num">${num}</span>
    </div>
    <div class="btn-control-box">
      <button class="btn-increase">+1</button>
      <button class="btn-reset">0</button>
      <button class="btn-decrease">-1</button>
    </div>
    <button class="btn-delete">❌</button>
  </article>`;
  }

  render() {
    const countersTemplate = this._counterInstances
      .map((counter) => this.makeCounterTemplate(counter.id, counter.num))
      .join('');
    $('#counter-list').innerHTML = countersTemplate;
  }

  initEventListeners() {
    $('#btn-top-box').addEventListener('click', (e) => {
      if (e.target.nodeName !== 'BUTTON') {
        return;
      }

      if (e.target.classList.contains('btn-new-counter')) {
        this._counters = [...this._counters, { id: this._currentId, num: 0 }];
        this._currentId += 1;
      }
      if (e.target.classList.contains('btn-clear')) {
        this._counters = [];
        this._currentId = 0;
      }
      this.update();
    });

    $('#btn-control-all-box').addEventListener('click', (e) => {
      if (e.target.nodeName !== 'BUTTON') {
        return;
      }

      const newCounters = [...this._counters];
      if (e.target.classList.contains('btn-increase')) {
        newCounters.map((counter) => (counter.num += 1));
      }
      if (e.target.classList.contains('btn-decrease')) {
        newCounters.map((counter) => (counter.num -= 1));
      }
      if (e.target.classList.contains('btn-reset')) {
        newCounters.map((counter) => (counter.num = 0));
      }
      this._counters = newCounters;
      this.update();
    });

    $('#counter-list').addEventListener('click', (e) => {
      if (e.target.nodeName !== 'BUTTON') {
        return;
      }

      const counterId = Number(
        e.target.closest('.counter-box').dataset.counterId
      );
      const counterInstance = this._counterInstances.find(
        (counter) => counter.id === counterId
      );
      if (e.target.classList.contains('btn-delete')) {
        this._counters = this._counters.filter(
          (counter) => counter.id !== counterInstance.id
        );
        this.update();
        return;
      }
      if (e.target.classList.contains('btn-increase')) {
        counterInstance.increase();
      }
      if (e.target.classList.contains('btn-decrease')) {
        counterInstance.decrease();
      }
      if (e.target.classList.contains('btn-reset')) {
        counterInstance.reset();
      }
      this._counters = this.getUpdatedCounters(counterInstance);
      this.update();
    });
  }
}

window.onload = () => {
  new App();
};
