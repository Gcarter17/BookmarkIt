import React from 'react'
import Card from './Card'

const DropCard = ({data}) => {

    const dropCard = data.map(child => {
        console.log(child)

        return (
            <Card data={child}/>
        )
    })

    return (
        <React.Fragment>
            {dropCard}
        </React.Fragment>
    )
}

export default DropCard