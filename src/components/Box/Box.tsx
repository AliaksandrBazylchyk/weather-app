import React from 'react';

import './Box.css';

interface BoxProps {
  children: React.ReactNode,
}

const Box = (props: BoxProps) => {
  const { children } = props;
  return (
    <div className="box">
      {children}
    </div>
  );
};

export default Box;
