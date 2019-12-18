import React from 'react'

const NavLink = ({data}) => {
    // console.log(data)

    return (
        <a className='capitalize'>
            {
                data.name ? data.name : data.url.includes('https://www.') ? data.url.split('https://www.').pop().split('.')[0] : data.url.includes('www.') ? data.url.split('www.').pop().split('.')[0] : data.url.includes('https://') ? data.url.split('https://').pop().split('.')[0] : data.url
            }
            <input onClick={
                () => {let checkBox = document.getElementById(data.id) 
                    if (checkBox.checked) {
                        let element = document.getElementById(`Card${data.id}`);
                        element.classList.toggle("inactive");
                        console.log(document.getElementById(`Card${data.id}`))
                    } else {
                        let element = document.getElementById(`Card${data.id}`);
                        element.classList.toggle("inactive")
                    }}} 
            type="checkbox" className={'itemCheckBox'} id={data.id}
            />
        </a>
    )
}

export default NavLink