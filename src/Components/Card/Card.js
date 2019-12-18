import React from 'react'
import NestedCard from './NestedCard'
import DropCard from './DropCard'

const Card = ({data}) => {

    if (!data.children) {
        return (
            <NestedCard data={data}/>
        )
    } else {
        console.log(data.children)
        return (       
            <div>
                <NestedCard data={data}/>
                <DropCard data={data.children} />
            </div>
        )
    }
    
}

export default Card;

//BEFORE DESTRUCTURING
    // const Card = (props) => {
    /* <img src={`https://robohash.org/${props.id}`} alt='robots'></img>
        <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p> */

        // <a href={url} target="_blank"><h2 className='capitalize'>{url.split('www.').pop().split('.com')[0]}</h2></a>

        