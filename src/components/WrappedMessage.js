import React, { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/core";

import './WrappedMessage.css';

const disappearTime = 5000;

const WrappedMessage = WrappedComponent =>
  function Message(props) {
    const [message, setMessage] = useState(undefined);
    const debounceDisappear = () => setMessage(null);
    const disappearCallback = useCallback(debounce(debounceDisappear, disappearTime), []);

    const setErrorMessage = useCallback(message => {
      setMessage({ message, status: 'error'});
      disappearCallback();
    }, [disappearCallback]);

    const setSuccessMessage = useCallback(message => {
      setMessage({ message, status: 'success'});
      disappearCallback();
    }, [disappearCallback]);

    return (
      <div>
        <WrappedComponent
          {...props}
          setError={setErrorMessage}
          setSuccess={setSuccessMessage}
        />

        <div className="message-alert">
        {message &&
          <Alert
            status={message.status}
            borderRadius="8px"
            boxShadow="4px 4px 8px rgba(0, 0, 0, 0.1)"
          >
            <AlertIcon />
            {message.message}
          </Alert>
        }
        </div>
      </div>
    );
  };

export default WrappedMessage;
