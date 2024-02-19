import React from 'react'

const String = ({strings}) => {
    return (
    <div>
        {strings.map((str, index) => (
            <div key={index}>
                <p>{str}</p>
            </div>
        ))}
    </div>
    )
}

export default String

