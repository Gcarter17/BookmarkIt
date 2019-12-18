import React from 'react'
import NavLink from './NavLink'
import NavItem from './NavItem'

const DropContainer = ({data}) => {

    const dropComponent = data.map(child => {
        console.log(child)

        return (
            <NavItem data={child}/>
        )
    })

    // console.log(dropComponent)

    return (
        <div className="dropdown-container">
            {dropComponent}
        </div>
    )
}

export default DropContainer