import Ember from 'ember';

export default Ember.ArrayController.extend({
  display: '',
  operator: '',
  operand_1: '',
  operand_2: '',

  actions: {
    zero: function() {
      this.append('0');
    },
    one: function() {
      this.append('1');
    },
    two: function() {
      this.append('2');
    },
    three: function() {
      this.append('3');
    },
    four: function() {
      this.append('4');
    },
    five: function() {
      this.append('5');
    },
    six: function() {
      this.append('6');
    },
    seven: function() {
      this.append('7');
    },
    eight: function() {
      this.append('8');
    },
    nine: function() {
      this.append('9');
    },
    decimal: function() {
      this.append('.');
    },
    plus: function() {
      this.set('operator', '+');
    },
    minus: function() {
      this.set('operator', '-');
    },
    multiply: function() {
      this.set('operator', '*');
    },
    divide: function() {
      this.set('operator', '/');
    },
    equals: function() {
      this.calc();
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

  clear: function() {
    this.set('operand_1', '');
    this.set('aperand_2', '');
    this.set('operator', '');
    this.set('myDisplay', '');
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
  }
});
