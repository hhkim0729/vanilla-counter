export default class Counter {
  constructor(num, id) {
    this._num = num;
    this._id = id;
  }

  get num() {
    return this._num;
  }

  get id() {
    return this._id;
  }

  increase = () => {
    this._num += 1;
  };

  decrease = () => {
    this._num -= 1;
  };

  reset = () => {
    this._num = 0;
  };
}
