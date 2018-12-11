import React from 'react';
import { Link } from 'react-router-dom';

function Locations(props) {
  return (
    <div>
      <ul>
        {props.places.map(place => {
          return (
            <li>
              <Link to={`/${place}/restaurants`}>{place}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Locations;
