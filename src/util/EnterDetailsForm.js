// EnterDetails.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateName, updateEmail } from './Redux/data/actions';

function EnterDetails() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    dispatch(updateName(name));
    dispatch(updateEmail(email));
  };

  return (
    <div>
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EnterDetails;
