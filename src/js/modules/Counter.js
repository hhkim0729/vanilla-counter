export default class Counter {
  constructor(num, id) {
    this.num = num;
    this.id = id;
  }

  initEventListeners(increase, decrease, reset, deleteCounter) {
    const counter = document.querySelectorAll('article')[this.id];
    counter.querySelector('.btn-increase').addEventListener('click', () => {
      increase(this.id);
    });

    counter.querySelector('.btn-decrease').addEventListener('click', () => {
      decrease(this.id);
    });

    counter.querySelector('.btn-reset').addEventListener('click', () => {
      reset(this.id);
    });

    counter.querySelector('.btn-delete').addEventListener('click', () => {
      deleteCounter(this.id);
    });
  }

  render() {
    return `<article data-counter-id=${this.id} class="counter-box">
    <div class="num-box">
      <span class="num">${this.num}</span>
    </div>
    <div class="btn-box">
      <button class="btn-control btn-increase">+1</button>
      <button class="btn-control btn-reset">0</button>
      <button class="btn-control btn-decrease">-1</button>
    </div>
    <button class="btn-delete">❌</button>
  </article>`;
  }
}
