import React from 'react';
import './styles.scss';

const renderAge = (age) => {
  if (age < 21) {
    return `I am ${age} and I am not allowed drink`;
  } else {
    return `I am ${age} and I am allowed to drink`;
  }
};

function License(props) {
  return (
    <div className='license'>
      <img src={props.image} />
      <br />
      <div className='license-info'>
        <h2> Name : {props.name} </h2>
        <p> State : {props.state} </p>
        <p> Age : {props.age} </p>
        <p> {renderAge(props.age)}</p>
      </div>
    </div>
  );
}

export default License;
