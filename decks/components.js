import React from 'react';
import './components.css';
export function Spinner(props) {
  return(
  <div className="showbox">
  <div className="loader">
    <svg className="circular" viewBox="25 25 50 50">
      <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
    </svg>
  </div>
</div>

      )
};

export function Video(props) {
  return (
    <video
      src={props.src}
      autoPlay="true"
      style={{
        width: '80%',
        objectFit: 'contain',
        boxShadow:
          'rgba(52, 61, 70, 0.3) -6px -6px 26px, rgba(17, 26, 32, 0.5) 6px 6px 16px',
        border: '1px solid rgba(13,21,26,0.15)',
        borderRadius: 10
      }}
    />
  );
}
