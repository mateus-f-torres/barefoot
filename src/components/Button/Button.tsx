import type { ReactElement } from 'react'
import bell from '../../assets/icons/bell-solid.svg'

interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button(props: ButtonProps): ReactElement {
  return (
    <button
      className="bg-red-200 block mx-auto mt-60 p-4 rounded-full shadow-md"
      onClick={props.handleClick}
    >
      <img className="w-8 h-8" src={bell} alt="Notification Bell" />
    </button>
  )
}

export default Button
