import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './toast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  MESSAGE_DANGER,
  MESSAGE_SUCCESS,
  MESSAGE_INFO,
  MESSAGE_WARNING,
  deleteMessageById
} from '../actions/message';


function Toast() {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages);

  return (
    <div className="notification-container">
      {messages && messages.length > 0 &&
        messages.map((toast, i) =>
          <div key={i} className={`notification-toast ${setColor(toast.type)}`}>
            <div>
              <p className="notification-message">
                {toast.id} - {toast.message}
              </p>
            </div>
            <button className="notification-quit-btn" onClick={() => dispatch(deleteMessageById(toast.id))}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        )
      }
    </div>
  )
}

function setColor(type) {
  switch (type) {
    case MESSAGE_DANGER:
      return 'danger';
    case MESSAGE_WARNING:
      return 'warning';
    case MESSAGE_SUCCESS:
      return 'success';
    case MESSAGE_INFO:
      return 'info';
  }
}
export default Toast;