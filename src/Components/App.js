import React, { Component } from 'react'
import List from './Card/List'
import SearchBox from '../Micro-Comps/Searchbox'
import Nav from './Nav/Nav'
import {Profiles} from '../Data/Profiles'
import {Selection} from '../Data/Selection'
// import Colors from './ColorPicker/Colors'

import ErrorBoundary from '../Micro-Comps/ErrorBoundary'


class App extends Component {
    state = {
        selection:Selection.map(el => ({...el, isChecked:false})),  
        profiles: [], 
        searchfield: '',
        mounted: false
    }

    componentDidMount() {
        this.setState({profiles: [...Profiles]})
        this.setState({mounted: true})
    }
    
    // onSearchChange = (event) => {
    //     console.log(event.target.value)
    //     this.setState({searchfield: event.target.value})
    // }

    render(){
    
    const filteredProfiles = this.state.profiles.filter(profs => {
        return profs.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    // console.log(filteredProfiles)
    // console.log(this.state.profiles)
    // console.log(this.state.selection)

    if (!this.state.selection) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='tc'>
                {/* <Colors/> */}
                {/* <SearchBox whenChange={this.onSearchChange}/> */}
                <Nav data={this.state.selection}/>
                    <ErrorBoundary>
                        <List data={this.state.selection}/>
                    </ErrorBoundary>


            </div>
        )
    }
}}

export default App
