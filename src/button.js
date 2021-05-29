import React from 'react';
import "./button.css";

function Button({child,click}) {
    return (
  <button onClick={click} className="btn-new">
    {child}
  </button>
  );
}
export default Button;