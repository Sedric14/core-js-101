/* eslint-disable no-console */
/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  // throw new Error('Not implemented');
  this.width = width;
  this.height = height;
  this.getArea = () => width * height;
  // eslint-disable-next-line no-trailing-spaces
  // return o;
}


/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  // throw new Error('Not implemented');
  return JSON.stringify(obj);
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  // throw new Error('Not implemented');
  const a = JSON.parse(json);
  const b = Object.setPrototypeOf(a, proto);
  return b;
}


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

const cssSelectorBuilder = {
  // str: '',
  // arr: [],
  element(/* value */) {
    throw new Error('Not implemented');
  },

  id(/* value */) {
    throw new Error('Not implemented');
    // this.str += `#${value}`;
    // this.arr.push(`#${value}`);
    // console.log('id', value, this.str);
    // return this;
  },

  class(/* value */) {
    throw new Error('Not implemented');
    // this.str += `.${value}`;
    // this.arr.push(`.${value}`);
    // console.log('class', value, this.str);
    // return this;
  },

  attr(/* value */) {
    throw new Error('Not implemented');
    // this.str += `[${value}]`;
    // this.arr.push(`[${value}]`);
    // console.log('attr', value, this.str);
    // return this;
  },

  pseudoClass(/* value */) {
    // throw new Error('Not implemented');
    // this.str += `:${value}`;
    // this.arr.push(`:${value}`);
    // console.log('psClass', value, this.str);
    // return this;
  },

  pseudoElement(/* value */) {
    throw new Error('Not implemented');
    // this.str += `::${value}`;
    // this.arr.push(`::${value}`);
    // console.log('psElem', value, this.str);
    // return this;
  },

  combine(/* selector1, combinator, selector2 */) {
    throw new Error('Not implemented');
    // let s1 = cssSelectorBuilder;
    // s1 = selector1;
    // const sone = s1.stringify();
    // // const s2 = cssSelectorBuilder(selector2);
    // this.str = `${sone} ${combinator} ${selector2}`;
    // console.log('combine', 's1=', 's2=', 'comb=', combinator, 'str=', this.str);
    // return this;
  },
  // stringify() {
  //   const temp = this.str;
  //   this.str = '';
  //   console.log('str', this.str, temp);
  //   return temp;
  // },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
