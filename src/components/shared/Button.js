import React from 'react'

import './Button.css'

function Button({children, type, onClick}) {
  return (
    <button type={type} onClick={onClick} className="shared__btn">
      {children}
    </button>
  )
}

export default Button
