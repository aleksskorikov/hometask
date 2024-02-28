import React from 'react';
import ComponentB from './ComponentB';
import '../../styles/scss/_tasck4.scss';

const ComponentA = () => {
  return (
    <>
      <div className="component__a">
        <div className='component__a-title'>ComponentA</div>
        <ComponentB />
      </div>
      
    </>
  )
}

export default ComponentA