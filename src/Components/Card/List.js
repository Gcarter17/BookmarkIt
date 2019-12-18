import React from 'react'
import Card from './Card'

const List = ({data}) => {
    const cardComponent = data.map(characters => {
        return (
            <Card 
                data={characters}
                // key={characters.id} 
                // id={characters.id} 
                // name={characters.name} 
                // url={characters.url} 
                // heading={characters.heading} 
                // description={characters.description} 
            />
        )
    })
    return (
    <div>
        
        {cardComponent}        
        {/* <Card id={data[0].id} name={data[0].name} email={data[0].email}/>
        <Card id={data[1].id} name={data[1].name} email={data[1].email}/>
        <Card id={data[2].id} name={data[2].name} email={data[2].email}/> */}
    </div>

    );
}

export default List;

