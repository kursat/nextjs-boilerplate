import React from 'react';

function Button({ children }) {
  return (
    <button type="button" className="bg-red-100 text-red-900 m-2 p-2 rounded-xl hover:bg-red-50 active:bg-red-400">
      {children}
    </button>
  );
}

export default Button;
