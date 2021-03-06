import Ember from 'ember';

export default Ember.ArrayController.extend({
  display: '',
  operator: '',
  operand_1: '',
  operand_2: '',
  after_calc: 0,

  actions: {
    zero: function() {
      this.checkForClear();
      this.append('0');
    },
    one: function() {
      this.checkForClear();
      this.append('1');
    },
    two: function() {
      this.checkForClear();
      this.append('2');
    },
    three: function() {
      this.checkForClear();
      this.append('3');
    },
    four: function() {
      this.checkForClear();
      this.append('4');
    },
    five: function() {
      this.checkForClear();
      this.append('5');
    },
    six: function() {
      this.checkForClear();
      this.append('6');
    },
    seven: function() {
      this.checkForClear();
      this.append('7');
    },
    eight: function() {
      this.checkForClear();
      this.append('8');
    },
    nine: function() {
      this.checkForClear();
      this.append('9');
    },
    decimal: function() {
      this.checkForClear();
      this.append('.');
    },
    plus: function() {
      this.checkForCalc();
      this.set('operator', '+');
    },
    minus: function() {
      this.checkForCalc();
      this.set('operator', '-');
    },
    multiply: function() {
      this.checkForCalc();
      this.set('operator', '*');
    },
    divide: function() {
      this.checkForCalc();
      this.set('operator', '/');
    },
    equals: function() {
      this.checkForCalc();
    },
    clear: function() {
      this.clear();
    }
  },

  append: function(value) {
    var operator = this.get('operator');
    var amount = '';
    if (operator === '') {
      amount = this.get('operand_1');
      amount = amount + value;
      this.set('operand_1', amount);
      this.set('myDisplay', this.get('operand_1'));
    } else {
      amount = this.get('operand_2');
      amount = amount + value;
      this.set('operand_2', amount);
      this.set('myDisplay', this.get('operand_2'));
    }
  },

  checkForCalc: function() {
    if (this.get('operand_1') !== '' &&
        this.get('operand_2') !== '' &&
        this.get('operator') !== '') {
      this.calc();
    }
  },

  checkForClear: function() {
    if (this.get('operand_1') !== '' &&
        this.get('operator') === '' &&
        parseInt(this.get('after_calc')) > 0) {
      this.clear();
    }
  },

  clear: function() {
    this.set('operand_1', '');
    this.set('aperand_2', '');
    this.set('operator', '');
    this.set('myDisplay', '');
    this.set('after_calc', 0);
  },

  calc: function() {
    var operand_1 = parseFloat(this.get('operand_1'));
    var operand_2 = parseFloat(this.get('operand_2'));
    var operator = this.get('operator');
    var result;
    if (operator === '+') {
      result = operand_1 + operand_2;
    }

    if (operator === '-') {
      result = operand_1 - operand_2;
    }

    if (operator === '*') {
      result = operand_1 * operand_2;
    }

    if (operator === '/') {
      result = operand_1 / operand_2;
    }

    this.set('myDisplay', result);
    this.set('operand_1', result);
    this.set('operand_2', '');
    this.set('operator', '');
    this.set('after_calc', this.get('after_calc') + 1);
  }
});
