import React from 'react';
import { useSelector } from 'react-redux';
import './toasts.css';
import Message from './message';

function Toasts() {
  const messages = useSelector(state => state.messages);

  return (
    <div className="notification-container">
      {messages && messages.length > 0 &&
        messages.map((m, i) => <Message key={i} message={m} />)
      }
    </div>
  )
}
export default Toasts;