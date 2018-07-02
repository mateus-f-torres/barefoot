//@flow
import * as React from 'react';

type Props = {
  active: boolean,
  children: React.Node, 
  onClick: () => mixed
};

const Link = (props: Props) => (
  <button onClick={props.onClick} disabled={props.active} style={{marginLeft: '4px'}}>
  {props.children}
  </button>
);

export default Link;