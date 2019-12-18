import React from 'react'
import NavLink from './NavLink'
import DropContainer from './DropContainer';

const NavItems = ({data}) => {
	// console.log(data)
	

	if (!data.children) {
		return (
			// handleChange={} event.target.checked
			<NavLink data={data}/>
		)
	}	else {
		
		// const children = data.children.map((child, index) => {
		// 	return (
		// 		child
		// 		// <NavLink data={[index].child}/>
		// 	)
		// })


		return (
			<div>
				<span className="dropdown-btn">
					<button className="dropBtn">{data.name}</button>
					<input 
						onClick={() => {let checkBox = document.getElementById(data.id) 
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
				</span>
				<DropContainer data={data.children}/>
				
			</div>
		)
	}
}

export default NavItems


{/* <div className="dropdown-container">
					

<a href="#">{data.children[0].name}<input type="checkbox" className={'itemCheckBox'} /></a>
<a href="#">Link 2<input type="checkbox" className={'itemCheckBox'} /></a>
<a href="#">Link 3<input type="checkbox" className={'itemCheckBox'} /></a>

</div> */}

