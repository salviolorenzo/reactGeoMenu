import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <ul>
      {props.items[props.match.params.restaurant].map(item => {
        return <li>{item}</li>;
      })}
    </ul>
  );
}

export default Menu;
