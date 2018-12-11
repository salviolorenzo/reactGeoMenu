import React from 'react';
import { Link } from 'react-router-dom';

function OnePlace(props) {
  return (
    <ul>
      {props.items[props.match.params.location].map(item => {
        return (
          <li>
            <Link to={`/${props.match.params.location}/restaurants/${item}`}>
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default OnePlace;
