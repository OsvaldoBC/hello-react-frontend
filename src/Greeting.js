import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomMessage } from './redux/messageSlice';

function Greeting() {
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomMessage());
  }, [dispatch]);

  return (
    <div>
      <h1>
        Greeting:
        {' '}
        {message}
      </h1>
    </div>
  );
}

export default Greeting;
