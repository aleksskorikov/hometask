import React from 'react'

const String = ({strings}) => {
    return (
    <div className='string-conteiner'>
        {strings.map((str, index) => (
            <div key={index} >
                <p className='string-text'>{str}</p>
            </div>
        ))}
    </div>
    )
}

export default String

