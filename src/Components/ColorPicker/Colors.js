import React, { Component } from 'react'


class Colors extends Component {
    state = {
        color1: '#009999',
        color2: '#8360c3'
    }

    shoot = () => {
        let color1 = document.querySelector(".color1").value
        this.setState({color1: color1})

        let color2 = document.querySelector(".color2").value
        this.setState({color2: color2})
        console.log(this.state)
    }

    setGradient = () => {
        let body = document.getElementById("gradient");
        body.style.background = `linear-gradient(to right, ${this.state.color1}, ${this.state.color2})`;
    }

    render() {
       this.setGradient()
    //    this.setButtonColor()
    
        var style1 = {
            backgroundColor: this.state.color1
        }

        var style2 = {
            backgroundColor: this.state.color2
        }
        return (
            <div className='mb1'>
                <input style={style1} id='color-picker' onChange={this.shoot} class="color1" type="color" name="color1" value={this.state.color1}/>
                <input style={style2} onChange={this.shoot} class="color2" type="color" name="color2" value={this.state.color2}/> 
            </div>
        )
    }
        
    }
    

export default Colors;