import React from 'react';

import './styles.css';

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
