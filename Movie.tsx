import * as React from 'react';
import './style.css';

export default function Movie(props) {
  return (
    <div>
      <h1>The Lord of the Rings: {props.title}</h1>
      <p>
        {props.hours}h {props.minutes}min
      </p>
    </div>
  );
}
