const CustomError = require("../extensions/custom-error");

const chainMaker = {
  _chain: [],

  getLength() {
    return this._chain.length;
  },

  addLink(value) {
    this._chain.push('( ' + value + ' )');
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || 1 > position || position > this._chain.length) {
      this._chain = [];
      throw new Error();
    }

    this._chain.splice(position - 1, 1);
    return this;
  },
  
  reverseChain() {
    this._chain = this._chain.reverse();
    return this;
  },

  finishChain() {
    const result = this._chain.join('~~');
    this._chain = [];

    return result;
  }
};

module.exports = chainMaker;
