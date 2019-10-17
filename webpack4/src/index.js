
import _ from 'lodash';
import './style/index.css'; // loader
import './style/a.scss';
import { myName, myAge } from '@/b';
import $ from 'jquery';

function createDomElement() {
  var dom1 = document.createElement('div');
  dom1.innerHTML = _.join(['aicoder.com', '好！', '线下学习11'], '');
  dom1.className = 'box';
  return dom1;
};
var divDom = createDomElement();
document.body.appendChild(divDom);

console.log(2);

// 测试es6转码
const [a] = [1];
console.log('a:', a);
console.log(myName, myAge);

$(function() {
  $('.box').click(function() {
    alert('jquery');
  });
});
