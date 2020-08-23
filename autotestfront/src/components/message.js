import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './message.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  MESSAGE_DANGER,
  MESSAGE_SUCCESS,
  MESSAGE_INFO,
  MESSAGE_WARNING,
  deleteMessageById
} from '../actions/message';

function Message(props) {
  const dispatch = useDispatch();
  const { message } = props;
  const AUTO_DELETE_TIME = 10000;

  useEffect(() => {
    setTimeout(() => {
      dispatch(deleteMessageById(message.id));
    }, AUTO_DELETE_TIME)
  })

  return (
    <div className={`notification-toast ${setColor(message.messageType)}`}>
      <div>
        <p className="notification-message">
          {message.message}
        </p>
      </div>
      <button className="notification-quit-btn" onClick={() => dispatch(deleteMessageById(message.id))}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
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
    default:
      return '';
  }
}
export default Message;