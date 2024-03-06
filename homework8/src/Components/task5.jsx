
import React, { useMemo } from 'react';

const task5 = ({ props1, props2, props3 }) => {
    
    const memoComponent = useMemo(() => {
        return (
            <div>
                <p>Props1: {props1}</p>
                <p>Props2: {props2}</p>
                <p>Props3: {props3}</p>
            </div>
        )
    }, [props1]);

    return memoComponent;
}

export default task5