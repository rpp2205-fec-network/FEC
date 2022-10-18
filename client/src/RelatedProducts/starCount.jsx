import React from 'react';
import parse from 'html-react-parser'

// installed package npm install html-react-parser to use function
// return star count with half star depending on props.count
export default function Star(props) {
  var decimal = props.count - Math.floor(props.count);
  var whole = Math.floor(props.count);
  var result = '';
  for (var i = 0; i < whole; i++) {
    result += '&#9733;';
  }
  if (decimal) {
    result += '0xE2 0xAF 0xA8';
  }
  for (var i = 0; i < (5 - whole - Math.ceil(decimal)); i++) {
    result += '&#9734;';
  }

  return (<i style="font-size:24px" class="fa">&#xf123;</i>)
}