import React from 'react'


const SearchBox = ({searchfield, whenChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type="search" 
                placeholder="search here" 
                onChange={whenChange}
            />
        </div>
    )
}

export default SearchBox