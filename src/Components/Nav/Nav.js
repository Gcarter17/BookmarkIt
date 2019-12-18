import React from 'react'
import NavItem from './NavItem'
import Colors from '../ColorPicker/Colors'

const Nav = ({data}) => {
    let dropdown = document.getElementsByClassName("dropdown-btn");
    let i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";
        }
        });
    }
    const navComponent = data.map(characters => {
        // console.log(characters)
        return (
            <NavItem data={characters}/>
            
        )
    })

    // console.log(data.map(characters => {
    //     return characters
    // }))

    // console.log(data)        ///

    return (
        <div className='sidenav'>
            <h4 className="prettyText capitalize mb2">Click color tiles to change background!</h4>
            <Colors/>
            {navComponent}
        </div>
    )
}

export default Nav;