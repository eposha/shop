import React, { useEffect, useRef, useCallback } from 'react';

const AutoClose = (props) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  const close = useCallback(() => {
    if (props.additionalFunction) {
      props.additionalFunction();
    }
    props.handleClose(false);
  }, []);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      close();
    }
  }, []);

  const handleClickOutside = useCallback((event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      close();
    }
  });

  return <div ref={wrapperRef}>{props.render()}</div>;
};

export default AutoClose;
